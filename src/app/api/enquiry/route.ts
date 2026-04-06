import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(req: Request) {
  try {
    const body = await req.json()


    const { name, email, phone, company, occasion, message } = body

    // ✅ Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Name, Email, Phone, and Message are required.' },
        { status: 400 }
      )
    }

    // ✅ Insert into Supabase
    const { error } = await supabase.from('enquiries').insert([
      {
        name,
        email,
        phone,
        company: company || null,
        occasion: occasion || null,
        message,
      },
    ])

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { success: true },
      { status: 201 }
    )


  } catch (err) {
    console.error('API error:', err)


    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    )


  }
}
