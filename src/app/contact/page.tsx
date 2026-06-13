import type { Metadata } from "next";
import { ContactPageSections } from "@/components/sections/contact/ContactPageSections";

export const metadata: Metadata = {
  title: "Contact | Melina Architect",
  description:
    "Start a residential, interior, renovation, or commercial space conversation with Melina Architect.",
};

export default function ContactPage() {
  return <ContactPageSections />;
}
