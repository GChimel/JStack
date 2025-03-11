import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import EditContactForm from "./editContactForm";

interface EditContactPageProps {
  params: {
    contactId: string;
  };
}

export default async function EditContactPage({
  params,
}: EditContactPageProps) {
  const { contactId } = params;

  const contact = await db.contact.findUnique({
    where: { id: contactId },
  });

  if (!contact) {
    return redirect("/");
  }

  return <EditContactForm contact={contact} />;
}
