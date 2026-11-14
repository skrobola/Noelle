'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function EmailSignup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      setMessage(data.message || "Thank you for signing up! We'll be in touch soon.");
      setEmail('');
      setName('');
    } catch (error) {
      setStatus('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="relative overflow-hidden sky-gradient py-20 px-4">
      <div className="pointer-events-none absolute left-6 top-10 opacity-80 md:left-16">
        <Image
          src="/website_share.png"
          alt=""
          width={140}
          height={95}
          className="img-knockout animate-float-drift h-auto w-24 md:w-32"
          aria-hidden
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-8 right-8 opacity-60 md:right-20"
        style={{ animationDelay: '1.5s' }}
      >
        <Image
          src="/website_share.png"
          alt=""
          width={100}
          height={68}
          className="img-knockout animate-float-slow h-auto w-16 rotate-12 md:w-20"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto max-w-xl">
        <div className="mb-10 text-center">
          <h2 className="section-heading text-balance">
            Learn more about the Noelle Whisper Series
          </h2>
          <p className="section-lead">
            Sign up for updates, promotions, and gentle reminders that feelings matter.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-paper/90 p-8 shadow-soft ring-1 ring-whisper-blue/50 backdrop-blur-sm"
        >
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block font-semibold text-ink">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-sky-deep/40 bg-white px-4 py-3 text-ink outline-none transition focus:border-whisper-blue-deep focus:ring-2 focus:ring-whisper-blue/60"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="mb-2 block font-semibold text-ink">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-sky-deep/40 bg-white px-4 py-3 text-ink outline-none transition focus:border-whisper-blue-deep focus:ring-2 focus:ring-whisper-blue/60"
              required
            />
          </div>

          {message && (
            <div
              className={`mb-4 rounded-xl p-3 text-sm ${
                status === 'success'
                  ? 'bg-sky/80 text-whisper-blue-deeper'
                  : 'bg-red-50 text-red-700'
              }`}
            >
              {message}
            </div>
          )}

          <button type="submit" disabled={status === 'loading'} className="btn-primary w-full disabled:opacity-50">
            {status === 'loading' ? 'Sending...' : 'Send'}
          </button>

          <p className="mt-4 text-center text-xs text-ink-muted">
            This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service
            apply.
          </p>
        </form>
      </div>
    </section>
  );
}
