"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer } from "@/components/ui/3d-card";

export default function ThreeDCardDemo() {
  return (
    <CardContainer className="w-screen h-screen flex flex-col items-center">
      <CardBody>
          <Image
            src="/final.png"
            height="302"
            width="481"
            className="object-cover rounded-[16px] group-hover/card:shadow-xl"
            alt="thumbnail"
          />
      </CardBody>
    </CardContainer>
  );
}
