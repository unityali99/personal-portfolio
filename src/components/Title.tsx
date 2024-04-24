import { alex_brush } from "@/utils/fonts";
import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

function Title({ children }: { children: ReactNode | string }) {
  return (
    <Text className={`xl:text-8xl ${alex_brush.className}`}>{children}</Text>
  );
}

export default Title;
