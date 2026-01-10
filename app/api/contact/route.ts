import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    // Validate input
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // In a production environment, you would:
    // 1. Save to a database
    // 2. Send to an email service (e.g., SendGrid, Mailchimp, etc.)
    // 3. Add to a mailing list service
    
    // For now, we'll just return success
    // You can integrate with services like:
    // - Mailchimp API
    // - SendGrid API
    // - Vercel Postgres + Resend
    // - etc.

    console.log('New signup:', { name, email });

    return NextResponse.json(
      { message: 'Thank you for signing up!' },
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
