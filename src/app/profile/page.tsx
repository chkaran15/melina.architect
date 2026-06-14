import type { Metadata } from "next";
import { ProfilePageSections } from "@/components/sections/profile/ProfilePageSections";

export const metadata: Metadata = {
  title: "Profile | Melina Chaudhary Architect",
  description:
    "An editorial profile of Melina Chaudhary Architect, her design thinking, practice philosophy, background, and areas of focus.",
};

export default function ProfilePage() {
  return <ProfilePageSections />;
}
