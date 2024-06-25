import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function Icon({ src }: { src: string }) {
  return (
    <Flex
      className="w-20 h-20 rounded-full justify-center items-center"
      style={{
        background:
          "linear-gradient(0deg, hsla(245, 97%, 57%, 1) 18%, hsla(180, 82%, 43%, 1) 100%)",
      }}
    >
      <Image src={src} alt="study" width={50} height={50} />
    </Flex>
  );
}

export default Icon;
