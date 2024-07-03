import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mindcheck - About the app",
  description: "Here is all informations you need to know about this app",
};

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>About</h1>
    </div>
  );
}
