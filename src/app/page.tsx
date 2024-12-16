"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer } from "@/components/ui/3d-card";

export default function ThreeDCardDemo() {
  return (
    <div className="w-screen h-screen flex flex-row items-center justify-center">
    <CardContainer>
      <CardBody className="w-[481px] h-[302px] overflow-hidden rounded-[16px] shadow-md rotate-90 flip:rotate-0">
          <Image
            src="/final.png"
            height="302"
            width="481"
            className="object-top"
            alt="thumbnail"
          />
      </CardBody>
    </CardContainer>
    </div>
  );
}
