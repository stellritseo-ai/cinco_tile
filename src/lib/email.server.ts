import nodemailer from "nodemailer";

export interface SendEmailPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
  source?: string;
  subject?: string;
  details?: Record<string, any>;
}

let cachedTransporter: nodemailer.Transporter | null = null;

function getTransporter() {
  const host = process.env.SMTP_HOST || "smtp.zoho.com";
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const secure = process.env.SMTP_SECURE !== "false";
  const user = process.env.SMTP_USER || "jack@stellrit.com";
  const pass = process.env.SMTP_PASS || "";

  if (!user || !pass) {
    console.warn("[EmailServer] SMTP credentials (SMTP_USER / SMTP_PASS) not set in environment.");
    return null;
  }

  if (!cachedTransporter) {
    cachedTransporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
      pool: true,
      maxConnections: 3,
      maxMessages: 100,
    });
  }

  return cachedTransporter;
}

/**
 * Sends a secure notification email via Zoho SMTP to the admin recipient.
 * This runs ONLY on the server — credentials never touch the browser client.
 */
export async function sendEmailNotification(payload: SendEmailPayload) {
  try {
    const transporter = getTransporter();
    if (!transporter) {
      console.warn("[EmailServer] Skipping email delivery because SMTP transporter is not configured.");
      return { success: false, error: "SMTP transporter not configured" };
    }

    const recipient = process.env.NOTIFICATION_RECIPIENT_EMAIL || process.env.SMTP_USER || "jack@stellrit.com";
    const sender = process.env.SMTP_USER || "jack@stellrit.com";
    const subject = payload.subject || `New Inquiry from ${payload.name} - Cinco Services`;

    const formattedTime = new Date().toLocaleString("en-US", {
      timeZone: "America/Chicago",
      dateStyle: "full",
      timeStyle: "short",
    });

    // Plain text version
    const textContent = `
NEW INQUIRY RECEIVED - Cinco Services LLC

Name: ${payload.name}
Email: ${payload.email}
Phone: ${payload.phone || "Not provided"}
Service: ${payload.service || "General Inquiry"}
Source: ${payload.source || "Website Form"}
Time: ${formattedTime} (US Central Time)

--- Message / Project Details ---
${payload.message || "No additional message provided."}
`.trim();

    // High-contrast, clean HTML version
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${subject}</title>
</head>
<body style="margin: 0; padding: 24px; background-color: #f4f5f7; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1f2937;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(0,0,0,0.06); border: 1px solid #e5e7eb;">
    <!-- Header -->
    <tr>
      <td style="background: linear-gradient(135deg, #0077b6 0%, #023e8a 100%); padding: 28px 32px; text-align: left;">
        <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: -0.01em;">
          Cinco Services
        </h1>
        <p style="margin: 6px 0 0 0; color: #caf0f8; font-size: 14px;">
          New Website Form Submission
        </p>
      </td>
    </tr>

    <!-- Body Content -->
    <tr>
      <td style="padding: 32px;">
        <div style="background-color: #f8fafc; border-left: 4px solid #0077b6; padding: 14px 18px; border-radius: 6px; margin-bottom: 24px;">
          <p style="margin: 0; font-size: 13px; color: #64748b; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Form Source</p>
          <p style="margin: 4px 0 0 0; font-size: 16px; color: #0f172a; font-weight: 600;">${payload.source || "Website Contact Form"}</p>
        </div>

        <h2 style="margin: 0 0 16px 0; font-size: 17px; font-weight: 700; color: #0f172a;">Contact Details</h2>

        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 24px; font-size: 15px;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; width: 140px; font-weight: 500;">Full Name:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${payload.name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 500;">Email:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0077b6; font-weight: 600;">
              <a href="mailto:${payload.email}" style="color: #0077b6; text-decoration: none;">${payload.email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 500;">Phone:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">
              ${payload.phone ? `<a href="tel:${payload.phone.replace(/\\D/g, '')}" style="color: #0f172a; text-decoration: none;">${payload.phone}</a>` : '<span style="color: #94a3b8; font-weight: normal;">Not provided</span>'}
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 500;">Service Requested:</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 600;">${payload.service || "General Inquiry"}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #64748b; font-weight: 500;">Received:</td>
            <td style="padding: 10px 0; color: #64748b; font-size: 14px;">${formattedTime}</td>
          </tr>
        </table>

        <h2 style="margin: 24px 0 12px 0; font-size: 17px; font-weight: 700; color: #0f172a;">Message / Project Notes</h2>
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 18px; font-size: 15px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${payload.message || "No additional message provided."}</div>

        <!-- Quick Reply Action -->
        <div style="margin-top: 32px; text-align: center;">
          <a href="mailto:${payload.email}?subject=${encodeURIComponent("Re: " + (payload.service || "Your Inquiry") + " - Cinco Services")}" style="display: inline-block; background-color: #0077b6; color: #ffffff; text-decoration: none; padding: 13px 28px; border-radius: 8px; font-weight: 600; font-size: 15px;">
            Reply to ${payload.name}
          </a>
        </div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 18px 32px; text-align: center; font-size: 13px; color: #94a3b8;">
        This email was automatically delivered from Cinco Services website via secure Zoho SMTP.<br>
        Direct reply will go to <strong>${payload.email}</strong>.
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();

    const info = await transporter.sendMail({
      from: `"Cinco Services Website" <${sender}>`,
      to: recipient,
      replyTo: payload.email,
      subject,
      text: textContent,
      html: htmlContent,
    });

    console.log(`[EmailServer] Email notification delivered successfully to ${recipient} (Message ID: ${info.messageId})`);
    return { success: true, messageId: info.messageId };
  } catch (error: any) {
    console.error("[EmailServer] Failed to deliver email notification:", error);
    return { success: false, error: error.message };
  }
}
