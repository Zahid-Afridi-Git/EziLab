import nodemailer from "nodemailer";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const attempts = new Map<string, { count: number; resetAt: number }>();

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character] || character);
}

function isRateLimited(request: Request) {
  const key = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  const now = Date.now();
  const current = attempts.get(key);
  if (!current || current.resetAt <= now) {
    attempts.set(key, { count: 1, resetAt: now + 15 * 60 * 1000 });
    return false;
  }
  current.count += 1;
  return current.count > 5;
}

export async function POST(request: Request) {
  try {
    if (isRateLimited(request)) return Response.json({ success: false, message: "Too many attempts. Please try again later." }, { status: 429 });
    if (!request.headers.get("content-type")?.includes("application/json")) return Response.json({ success: false, message: "Invalid request." }, { status: 415 });

    const body = await request.json() as { name?: unknown; email?: unknown; message?: unknown; website?: unknown };
    if (body.website) return Response.json({ success: true });
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    if (name.length < 2 || name.length > 60 || !emailPattern.test(email) || email.length > 254 || message.length < 20 || message.length > 5000) {
      return Response.json({ success: false, message: "Please check the submitted information." }, { status: 400 });
    }

    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;
    const recipient = process.env.CONTACT_TO_EMAIL || "support@ezilab.io";
    if (!user || !pass) {
      console.error("Contact SMTP is not configured.");
      return Response.json({ success: false, message: "Email service is temporarily unavailable. Please email support@ezilab.io directly." }, { status: 503 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.hostinger.com",
      port,
      secure: port === 465,
      auth: { user, pass },
    });
    await transporter.sendMail({
      from: `EziLab Contact Form <${user}>`,
      to: recipient,
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nProject details:\n${message}`,
      html: `<div style="font-family:Arial,sans-serif;max-width:640px;color:#111827"><h2>New EziLab project inquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p><h3>Project details</h3><p style="white-space:pre-wrap;line-height:1.6">${escapeHtml(message)}</p></div>`,
    });
    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact email failed:", error);
    return Response.json({ success: false, message: "The inquiry could not be sent. Please try again or email support@ezilab.io." }, { status: 500 });
  }
}
