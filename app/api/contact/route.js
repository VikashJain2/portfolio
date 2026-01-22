import { sendContactEmail } from '@/lib/sendEmail';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Send email
    await sendContactEmail({ name, email, subject, message });

    return Response.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact API error:', error);
    return Response.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return Response.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}