import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();
  const { name, email, phone, subject, message } = body;

  try {
    // Configure mail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "yourEmail@gmail.com",        // <- YOUR EMAIL
        pass: "your_app_password",          // <- APP PASSWORD (Not Gmail password)
      },
    });

    // Professional email template with all fields
    const htmlTemplate = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #f97316, #f59e0b); padding: 30px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 28px;">🛋️ New Contact Message</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">FurniMart Customer Inquiry</p>
        </div>

        <!-- Content -->
        <div style="padding: 30px; background: #f8fafc;">
          <!-- Customer Information -->
          <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #f97316;">
            <h3 style="color: #1e293b; margin-top: 0;">👤 Customer Information</h3>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #475569; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #1e293b;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #475569; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0; color: #1e293b;">
                  <a href="mailto:${email}" style="color: #f97316; text-decoration: none;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; color: #475569; font-weight: bold;">Phone:</td>
                <td style="padding: 8px 0; color: #1e293b;">
                  <a href="tel:${phone}" style="color: #f97316; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              ` : ''}
              ${subject ? `
              <tr>
                <td style="padding: 8px 0; color: #475569; font-weight: bold;">Subject:</td>
                <td style="padding: 8px 0; color: #1e293b;">${subject}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          <!-- Message -->
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #0ea5e9;">
            <h3 style="color: #1e293b; margin-top: 0;">💬 Customer Message</h3>
            <div style="background: #f1f5f9; padding: 15px; border-radius: 6px; border: 1px solid #e2e8f0;">
              <p style="margin: 0; color: #334155; line-height: 1.6; white-space: pre-line;">${message}</p>
            </div>
          </div>

          <!-- Footer Info -->
          <div style="margin-top: 20px; padding: 15px; background: #f0f9ff; border-radius: 8px; border-left: 4px solid #0ea5e9;">
            <p style="margin: 0; color: #0369a1; font-size: 14px;">
              <strong>📅 Submitted:</strong> ${new Date().toLocaleString('en-IN', { 
                timeZone: 'Asia/Kolkata',
                dateStyle: 'medium',
                timeStyle: 'medium'
              })}
            </p>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #1e293b; color: #94a3b8; padding: 20px; text-align: center; font-size: 14px;">
          <p style="margin: 0 0 10px 0;">This email was sent from the FurniMart contact form</p>
          <p style="margin: 0;">
            <a href="https://furnimart.com" style="color: #f97316; text-decoration: none; margin: 0 10px;">Visit Website</a>
            <a href="mailto:support@furnimart.com" style="color: #f97316; text-decoration: none; margin: 0 10px;">Contact Support</a>
          </p>
          <p style="margin: 15px 0 0 0; font-size: 12px;">
            &copy; ${new Date().getFullYear()} FurniMart. All rights reserved.
          </p>
        </div>
      </div>
    `;

    // Plain text version as fallback
    const textTemplate = `
NEW CONTACT FORM SUBMISSION - FurniMart
=========================================

CUSTOMER INFORMATION:
-------------------
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Subject: ${subject || 'Not provided'}

MESSAGE:
--------
${message}

Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}

This email was sent from the FurniMart contact form.
    `;

    // Send email to admin
    await transporter.sendMail({
      from: {
        name: "FurniMart Contact Form",
        address: "yourEmail@gmail.com"
      },
      to: "yourEmail@gmail.com",            // <- Admin Email (where mail will come)
      subject: subject ? `FurniMart: ${subject}` : `New Contact Message from ${name}`,
      text: textTemplate,
      html: htmlTemplate,
      replyTo: email
    });

    return Response.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json({
      success: false,
      message: "Failed to send email",
    });
  }
}