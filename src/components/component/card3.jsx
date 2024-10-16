import * as React from "react";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardWithForm3() {
  return (
    <Card className="w-[230px] h-[140] bg-[#1c3755] text-white border border-[#2c4a67] shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.01]">
      <CardHeader>
        <Image
            src="/figma_.png"
            alt="Figma"
            width={90}
            height={90}
            className="transition-transform duration-300 hover:scale-110"
          />
        <CardTitle className="text-1xl"> Figma</CardTitle>
        <CardDescription>an online design and prototyping tool,for people to create, share, and test designs for websites, mobile apps, and other digital products and experiences.</CardDescription>
      </CardHeader>
         </Card>
  );
}