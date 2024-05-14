import { Box, Text } from "@chakra-ui/react";
import React from "react";

function CircularProgressBar({
  progress,
  text,
}: {
  progress: "60%" | "80%";
  text: string;
}) {
  return (
    <Box className="w-72 h-72 rounded-full relative bg-gradient-to-t from-gradientStart to-gradientEnd overflow-ellipsis">
      <Box
        className={`w-4/5 h-4/5 m-0 absolute top-5 ${
          progress === "80%"
            ? "left-80 rounded-tl-full"
            : "left-44 rounded-bl-none rounded-l-full"
        } -translate-x-1/2 -translate-y-1/2 bg-dark`}
      ></Box>
      <Box className="w-4/5 h-4/5 rounded-full m-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark flex items-center justify-center">
        <Text className="text-6xl">{progress}</Text>
      </Box>
      <Text className="absolute -bottom-16 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
        {text}
      </Text>
    </Box>
  );
}

export default CircularProgressBar;
