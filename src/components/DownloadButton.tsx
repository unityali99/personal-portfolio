import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

function DownloadButton({ children }: { children: ReactNode | string }) {
  return (
    <Box
      as="button"
      color={"white"}
      py={4}
      px={16}
      className="rounded-md mx-auto xl:text-xl bg-gradient-to-b from-cyan-500 from-10% to-90% to-blue-800"
    >
      {children}
    </Box>
  );
}

export default DownloadButton;
