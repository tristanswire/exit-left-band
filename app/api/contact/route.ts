import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      venueName,
      eventName,
      eventType,
      guests,
      budget,
      message,
    } = body;

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !eventType?.trim()) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Exit Left Booking <bookings@exitleftband.com>",
      to: process.env.BOOKING_EMAIL!,
      subject: `New Booking Request — ${eventType} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #1a6b45;">New Booking Request</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td><strong>Name</strong></td><td>${name}</td></tr>
            <tr><td><strong>Email</strong></td><td>${email}</td></tr>
            <tr><td><strong>Phone</strong></td><td>${phone || "N/A"}</td></tr>
            <tr><td><strong>Venue</strong></td><td>${venueName || "N/A"}</td></tr>
            <tr><td><strong>Event Name</strong></td><td>${eventName || "N/A"}</td></tr>
            <tr><td><strong>Event Type</strong></td><td>${eventType}</td></tr>
            <tr><td><strong>Guests</strong></td><td>${guests || "N/A"}</td></tr>
            <tr><td><strong>Budget</strong></td><td>${budget || "N/A"}</td></tr>
            <tr><td><strong>Message</strong></td><td>${message || "N/A"}</td></tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
