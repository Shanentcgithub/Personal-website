import * as React from "react";
import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CardWithForm6() {
  return (
    <Card className="w-[230px] h-[140] bg-[#1c3755] text-white border border-[#2c4a67] shadow-xl rounded-2xl p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.01]">
      <CardHeader>
        <Image
            src="/python_.png"
            alt="python"
            width={90}
            height={90}
            className="transition-transform duration-300 hover:scale-110"
          />
        <CardTitle className="text-1xl">Python</CardTitle>
        <CardDescription> is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis.</CardDescription>
      </CardHeader>
         </Card>
  );
}