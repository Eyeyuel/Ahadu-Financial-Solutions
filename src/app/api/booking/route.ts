import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Read environment variable strictly from process.env (supplied via .env.local locally or Vercel in production)
    const rawUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || '';
    const webhookUrl = rawUrl.trim().replace(/^["']|["']$/g, '');

    if (!webhookUrl) {
      console.error('Missing GOOGLE_SHEET_WEBHOOK_URL environment variable.');
      return NextResponse.json(
        { status: 'error', message: 'Form submission endpoint is not configured. Please add GOOGLE_SHEET_WEBHOOK_URL.' },
        { status: 500 }
      );
    }

    // Format phone with single quote prefix so Google Sheets treats it as plain text instead of a math formula
    const formattedPhone = body.phone ? `'${body.phone}` : '';

    const payload = {
      ...body,
      phone: formattedPhone,
    };

    // Forward the consultation form payload to Google Apps Script Web App
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error('Google Sheets Webhook HTTP Error:', response.status);
      return NextResponse.json(
        { status: 'error', message: 'Unable to connect to Google Sheets server.' },
        { status: 500 }
      );
    }

    // Parse response from Google Apps Script if available
    const text = await response.text();
    try {
      const data = JSON.parse(text);
      if (data.status === 'error') {
        return NextResponse.json(
          { status: 'error', message: data.message || 'Google Sheets script execution error.' },
          { status: 500 }
        );
      }
    } catch {
      // If Google Apps Script returns HTML redirect or plain text, HTTP 200 means success
    }

    return NextResponse.json({ status: 'success', message: 'Consultation request recorded successfully.' });
  } catch (error: any) {
    console.error('Error submitting consultation request to Google Sheets:', error);
    return NextResponse.json(
      { status: 'error', message: 'Network connection failed. Please try again.' },
      { status: 500 }
    );
  }
}
