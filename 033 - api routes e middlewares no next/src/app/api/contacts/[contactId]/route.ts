import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { contactId: string } }
) {
  const { name, email } = await request.json();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Name and email are required" },
      { status: 400 }
    );
  }

  const emailAlreadyExists = await db.contact.findUnique({
    where: {
      email,
      AND: {
        id: {
          not: params.contactId,
        },
      },
    },
    select: {
      id: true,
      email: true,
    },
  });

  if (emailAlreadyExists) {
    return NextResponse.json(
      { error: "Email already exists" },
      { status: 409 }
    );
  }

  const contact = await db.contact.update({
    where: {
      id: params.contactId,
    },
    data: {
      name,
      email,
    },
  });

  return NextResponse.json({ contact }, { status: 200 });
}
