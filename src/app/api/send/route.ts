import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactFormEmail from '../../../../src/common/components/sections/contact/_components/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { email, message } = await req.json();

    // Validation
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
        { status: 400 },
      );
    }

    // Send email
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Resend verified domain
      to: 'syedareebali795@gmail.com', // Your email
      subject: 'New Contact Form Submission',
      reply_to: email, // User ka email
      react: ContactFormEmail({ message, senderEmail: email }),
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 },
    );
  }
}
