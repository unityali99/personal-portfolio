import { Box } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

function MainPicture({ src }: { src: string }) {
  return (
    <Box className="relative w-4/12" style={{ height: "40rem" }}>
      <Image
        alt="me"
        src={src}
        fill
        objectFit="cover"
        quality={100}
        className="rounded-lg"
      />
    </Box>
  );
}

export default MainPicture;
