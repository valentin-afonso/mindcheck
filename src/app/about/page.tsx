import type { Metadata } from "next";
import Image from "next/image";
import GridLayout from "@/app/ui/GridLayout";

export const metadata: Metadata = {
  title: "Mindcheck - About the app",
  description: "Here is all informations you need to know about this app",
};

export default function page() {
  return (
    <GridLayout size="boxed" additional_class="">
      <div className="flex h-screen max-h-screen flex-col justify-between items-end p-0 lg:p-24 lg:pb-0 pb-0">
        <div className="flex flex-col justify-center gap-4 pt-32 lg:pt-8">
          <p className="text-center">
            <strong>Welcome to Mindcheck !</strong>
          </p>
          <p className="text-xs sm:text-base text-center text-black/80 lg:max-w-full max-w-3xl">
            A todolist application developed with NextJs, designed for both
            profit and experimental purposes. It offers a simple and clean
            interface for easy task management. Users can sort tasks by
            importance, check or uncheck them to indicate their progress, and
            rearrange them according to their needs. This application aims to
            optimize productivity by providing an intuitive and pleasant user
            experience.
          </p>
        </div>
        <Image src="/img-about.png" width={708} height={368} alt="todolist" />
      </div>
    </GridLayout>
  );
}
