import * as React from "react";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardWithForm2() {
  return (
    <Card className="w-[300px] h-[140] bg-[#1c3755] text-white border border-[#2c4a67] shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.01]">
      <CardHeader>
        <Image
            src="/javascript_.png"
            width={90}
            height={90}
            className="transition-transform duration-300 hover:scale-110"
          />
        <CardTitle className="text-1xl"> JavaScript </CardTitle>
        <CardDescription>is essential for creating interactive web pages, enabling event-driven programming, and supports both client-side and server-side development through frameworks like Node.js.</CardDescription>
      </CardHeader>
         </Card>
  );
}