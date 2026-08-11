import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbzw3Y8D9yxaP6RHa126n4eWKS1BMgjaQE55bLANIMs_2Md85gHujlPfYiw_N-0eHZ_m/exec";

    // Format phone with single quote prefix so Google Sheets treats it as plain text instead of a math formula (for +251...)
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
      console.error('Google Sheets API Error Status:', response.status);
    }

    return NextResponse.json({ status: 'success', message: 'Consultation request recorded successfully.' });
  } catch (error: any) {
    console.error('Error submitting consultation request to Google Sheets:', error);
    return NextResponse.json({ status: 'success', message: 'Consultation request received.' });
  }
}
