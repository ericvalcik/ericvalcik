"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer } from "@/components/ui/3d-card";

export default function ThreeDCardDemo() {
  return (
    <div className="w-dvw h-dvh flex flex-row items-center justify-center">
    <CardContainer>
      <CardBody className="flip:hidden h-[481px] w-[302px] overflow-hidden rounded-[16px] shadow-md">
          <Image
            src="/final-rotated.png"
            height="481"
            width="302"
            className="object-right"
            alt="vizitka rotated"
          />
      </CardBody>
      <CardBody className="hidden flip:block w-[481px] h-[302px] overflow-hidden rounded-[16px] shadow-md">
          <Image
            src="/final.png"
            height="302"
            width="481"
            className="object-top"
            alt="vizitka"
          />
      </CardBody>
    </CardContainer>
    </div>
  );
}
