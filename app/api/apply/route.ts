import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, role, industry, interest, linkedin } = body;

    if (!name || !email || !role) {
      return NextResponse.json({ error: "Name, email, and role are required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
    }

    const toEmail = process.env.NOTIFICATION_EMAIL || "pradhan@gmail.com";

    // Use verified from address. During testing: onboarding@resend.dev
    // After domain verification: applications@launchdream.com
    const fromAddress = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const fromName = `Launch Dream Applications`;

    const emailHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8">
<style>
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#060608;color:#F2EFE8;margin:0;padding:32px 16px}
  .wrap{max-width:580px;margin:0 auto;background:#0E0E12;border:1px solid #28283A;border-radius:4px;overflow:hidden}
  .hdr{padding:32px 36px;border-bottom:1px solid rgba(212,168,67,0.25)}
  .logo{font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:#D4A843;font-weight:700}
  .title{font-size:22px;font-weight:300;color:#F2EFE8;margin-top:10px;letter-spacing:-.02em}
  .body{padding:36px}
  .field{margin-bottom:20px}
  .lbl{font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:#9896A0;margin-bottom:4px}
  .val{font-size:15px;color:#F2EFE8;line-height:1.5}
  .divider{height:1px;background:linear-gradient(90deg,transparent,rgba(212,168,67,0.3),transparent);margin:28px 0}
  .ftr{padding:20px 36px;border-top:1px solid #1A1A22}
  .ftr-text{font-size:11px;color:#52505A}
</style>
</head>
<body>
<div class="wrap">
  <div class="hdr">
    <div class="logo">Launch Dream</div>
    <div class="title">New Application Received</div>
  </div>
  <div class="body">
    <div class="field"><div class="lbl">Full Name</div><div class="val">${name}</div></div>
    <div class="field"><div class="lbl">Email</div><div class="val"><a href="mailto:${email}" style="color:#D4A843">${email}</a></div></div>
    <div class="field"><div class="lbl">Role</div><div class="val">${role}</div></div>
    ${industry ? `<div class="field"><div class="lbl">Industry / Expertise</div><div class="val">${industry}</div></div>` : ""}
    ${interest ? `<div class="divider"></div><div class="field"><div class="lbl">What They Want to Build or Contribute</div><div class="val">${interest}</div></div>` : ""}
    ${linkedin ? `<div class="field"><div class="lbl">LinkedIn / Website</div><div class="val"><a href="${linkedin}" style="color:#D4A843">${linkedin}</a></div></div>` : ""}
  </div>
  <div class="ftr"><div class="ftr-text">Submitted via launchdream.com &bull; ${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</div></div>
</div>
</body>
</html>`;

    const confirmHtml = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8">
<style>
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#060608;color:#F2EFE8;margin:0;padding:32px 16px}
  .wrap{max-width:580px;margin:0 auto;background:#0E0E12;border:1px solid #28283A;border-radius:4px;overflow:hidden}
  .hdr{padding:32px 36px;border-bottom:1px solid rgba(212,168,67,0.25)}
  .logo{font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:#D4A843;font-weight:700}
  .title{font-size:22px;font-weight:300;color:#F2EFE8;margin-top:10px}
  .body{padding:36px;font-size:15px;color:#9896A0;line-height:1.7}
  .ftr{padding:20px 36px;border-top:1px solid #1A1A22;font-size:11px;color:#52505A}
</style>
</head>
<body>
<div class="wrap">
  <div class="hdr">
    <div class="logo">Launch Dream</div>
    <div class="title">Application Received</div>
  </div>
  <div class="body">
    <p>Hi ${name},</p>
    <p>Your application has been received. Every submission is reviewed personally — no automated filters.</p>
    <p>If your background matches an active or upcoming venture, you will hear from Nitin directly within 1–2 weeks.</p>
    <p style="margin-top:32px;color:#52505A">— Nitin Pradhan<br>Founder, Launch Dream</p>
  </div>
  <div class="ftr">Launch Dream LLC &bull; Washington DC Metro Area</div>
</div>
</body>
</html>`;

    // Send notification to Nitin
    await resend.emails.send({
      from: `${fromName} <${fromAddress}>`,
      to: [toEmail],
      reply_to: email,
      subject: `New Application: ${name} — ${role}`,
      html: emailHtml,
    });

    // Send confirmation to applicant
    await resend.emails.send({
      from: `${fromName} <${fromAddress}>`,
      to: [email],
      subject: "Your application to Launch Dream",
      html: confirmHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Application submission error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
