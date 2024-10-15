import * as React from "react";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardWithForm() {
  return (
    <Card className="w-[300px] h-[140] bg-[#1c3755] text-white border border-[#2c4a67] shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.01]">
      <CardHeader>
        <Image
            src="/nextjs_.png"
            width={90}
            height={90}
            className="rounded-full transition-transform duration-300 hover:scale-110"
          />
        <CardTitle className="text-1xl">Next.js</CardTitle>
        <CardDescription>A powerful React framework for building web applications,Next. js is a powerful web development framework that simplifies the process of building fast, interactive applications.</CardDescription>
      </CardHeader>
         </Card>
  );
}