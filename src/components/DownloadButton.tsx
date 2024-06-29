import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React, { ReactNode } from "react";

function DownloadButton({ children }: { children: ReactNode | string }) {
  return (
    <Box
      as="button"
      color={"white"}
      className="rounded-md mx-auto xl:text-xl bg-gradient-to-b from-cyan-500 from-10% to-90% to-blue-800 py-3 px-8 md:py-4 md:px-16"
    >
      <Link
        href={
          "https://flutter-todo-app.s3.ir-thr-at1.arvanstorage.ir/My-Resume.pdf?versionId="
        }
        target="_blank"
      >
        {children}
      </Link>
    </Box>
  );
}

export default DownloadButton;
