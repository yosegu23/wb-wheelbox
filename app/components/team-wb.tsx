import React from "react";
import { Icon } from "@/components/ui/evervault-card";
import Image, { StaticImageData } from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: StaticImageData;
}

interface TeamWbProps {
  members: TeamMember[];
}

export function TeamWb({ members }: TeamWbProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {members.map((member, index) => (
        <div
          key={index}
          className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center justify-center max-w-sm mx-auto p-8 relative h-[20rem]">
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

          <div className="flex items-center justify-center w-full h-44 rounded-full p-10">
            <Image
              src={member.image}
              width={150}
              height={150}
              alt={member.name}
            />
          </div>

          <div className="w-full p-4">
            <h2 className="dark:text-white text-black mt-4 text-base font-semibold">
              {member.name}
            </h2>
            <p className="text-sm flex items-center justify-center border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-2 text-black dark:text-white px-2 py-0.5">
              {member.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
