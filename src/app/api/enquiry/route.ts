import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Enquiry from '@/models/Enquiry';

export async function POST(req: Request) {
  try {
    // 1. Connect to the database
    await dbConnect();

    // 2. Parse the request body
    const body = await req.json();
    const { name, email, phone, company, occasion, message } = body;

    // 3. Basic validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, Email, Phone, and Message are required fields.' },
        { status: 400 }
      );
    }

    // 4. Create a new enquiry document
    const newEnquiry = new Enquiry({
      name,
      email,
      phone,
      company,
      occasion,
      message,
    });

    // 5. Save to MongoDB
    await newEnquiry.save();

    return NextResponse.json(
      { success: true, message: 'Enquiry submitted successfully.' },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error submitting enquiry:', error);
    return NextResponse.json(
      { error: 'Failed to submit enquiry. Please try again later.' },
      { status: 500 }
    );
  }
}
