import { Box, Divider } from "@chakra-ui/react";
import React from "react";

function DividedTitle({ title }: { title: string }) {
  return (
    <Box className="mt-32 space-y-4 w-96">
      <div className="text-5xl">{title}</div>
      <Divider
        bgColor={"whitesmoke"}
        borderWidth={"thin"}
        borderRadius={"100px"}
      />
    </Box>
  );
}

export default DividedTitle;
