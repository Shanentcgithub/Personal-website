import * as React from "react";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardWithForm8() {
  return (
    <Card className="w-[300px] h-[140] bg-[#1c3755] text-white border border-[#2c4a67] shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.01]">
      <CardHeader>
        <Image
            src="/PHP.png"
            alt="php"
            width={90}
            height={90}
            className="transition-transform duration-300 hover:scale-110"
          />
        <CardTitle className="text-1xl">PHP </CardTitle>
        <CardDescription>is a general-purpose scripting language and interpreter that is freely available and widely used for web development.</CardDescription>
      </CardHeader>
         </Card>
  );
}