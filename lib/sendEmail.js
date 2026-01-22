import nodemailer from 'nodemailer';

export async function sendContactEmail(formData) {
  const { name, email, subject, message } = formData;

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Send email to admin
    const adminMail = await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `New Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>Received at: ${new Date().toLocaleString()}</p>
      `,
    });

    // Send confirmation email to user
    const userMail = await transporter.sendMail({
      from: `"Vikash Jain" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting me!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #FF6B35;">Thank You for Contacting Me!</h2>
          <p>Hi ${name},</p>
          <p>I have received your message and will get back to you within 24 hours.</p>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Message:</strong></p>
            <p>${message.replace(/\n/g, '<br>')}</p>
          </div>
          <p>Best regards,<br>Vikash Jain<br>Full Stack Developer</p>
          <hr style="margin: 30px 0;">
          <p style="font-size: 12px; color: #666;">
            This is an automated response. Please don't reply to this email.
          </p>
        </div>
      `,
    });

    return { success: true, adminId: adminMail.messageId, userId: userMail.messageId };
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
}