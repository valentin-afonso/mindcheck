import type { Metadata } from "next";
import GridLayout from "@/app/ui/GridLayout";

export const metadata: Metadata = {
  title: "Mindcheck - About the app",
  description: "Here is all informations you need to know about this app",
};

export default function page() {
  return (
    <GridLayout size="boxed" additional_class="">
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="mb-4">About</h1>
        <p className="text-center text-black/80">
          <strong>Welcome to Mindcheck !</strong>
          <br />A todolist application developed with NextJs, designed for both
          profit and experimental purposes. It offers a simple and clean
          interface for easy task management. Users can sort tasks by
          importance, check or uncheck them to indicate their progress, and
          rearrange them according to their needs. This application aims to
          optimize productivity by providing an intuitive and pleasant user
          experience.
        </p>
      </div>
    </GridLayout>
  );
}
