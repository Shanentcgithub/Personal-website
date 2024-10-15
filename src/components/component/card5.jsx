import * as React from "react";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardWithForm5() {
  return (
    <Card className="w-[230px] h-[140] bg-[#1c3755] text-white border border-[#2c4a67] shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.01]">
      <CardHeader>
        <Image
            src="/react_.png"
            alt="React"
            width={90}
            height={90}
            className="transition-transform duration-300 hover:scale-110"
          />
        <CardTitle className="text-1xl">React</CardTitle>
        <CardDescription>is a free and open-source front-end JavaScript library for building user interfaces based on components by Facebook. It is maintained by Meta and a community of individual developers and companies.</CardDescription>
      </CardHeader>
         </Card>
  );
}