import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured');
  }
  return new Resend(apiKey);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    const fromEmail = process.env.CONTACT_FROM_EMAIL;
    if (!fromEmail) {
      console.error('CONTACT_FROM_EMAIL is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured' },
        { status: 500 }
      );
    }

    const resend = getResend();
    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const from = `A Whisper From Noelle <${fromEmail}>`;

    const { error: notifyError } = await resend.emails.send({
      from,
      to: fromEmail,
      replyTo: email.trim(),
      subject: 'New Email Signup - A Whisper From Noelle',
      html: `
        <h2>New Email List Signup</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    if (notifyError) {
      console.error('Resend notify error:', notifyError);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again.' },
        { status: 500 }
      );
    }

    const { error: confirmError } = await resend.emails.send({
      from,
      to: email.trim(),
      subject: 'Welcome to A Whisper From Noelle!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #5a9bb8;">Thank You, ${safeName}!</h2>
          <p>Thank you for signing up to receive updates about the Whisper From Noelle series.</p>
          <p>We're excited to share news about our children's books, promotions, and new releases with you.</p>
          <p>Stay tuned for updates about:</p>
          <ul>
            <li>New book releases</li>
            <li>Special promotions</li>
            <li>Author events and news</li>
            <li>Free activity downloads</li>
          </ul>
          <p>If you have any questions, feel free to reach out to us.</p>
          <p>Best regards,<br>The A Whisper From Noelle Team</p>
          <hr style="margin-top: 30px; border: none; border-top: 1px solid #eee;">
          <p style="font-size: 12px; color: #666;">
            A Whisper From Noelle<br>
            <a href="https://awhisperfromnoelle.com" style="color: #5a9bb8;">awhisperfromnoelle.com</a>
          </p>
        </div>
      `,
    });

    if (confirmError) {
      console.error('Resend confirmation error:', confirmError);
      // Owner notification already sent; still treat signup as successful
    }

    return NextResponse.json(
      { message: 'Thank you for signing up! Check your email for confirmation.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
