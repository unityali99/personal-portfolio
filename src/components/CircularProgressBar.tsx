"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

function CircularProgressBar({
  progress,
  text,
  color,
}: {
  progress: number;
  text: string;
  color: string;
}) {
  return (
    <Box className="flex flex-col items-center space-y-8 text-center">
      <CircularProgressbarWithChildren
        styles={buildStyles({
          pathColor: color,
          strokeLinecap: "rounded",
          pathTransitionDuration: 0.5,
          textSize: "15px",
          trailColor: "#0000",
        })}
        value={progress}
        text={`${progress}%`}
      />
      <div className="text-xs md:text-sm lg:text-xl">{text}</div>
    </Box>
  );
}

export default CircularProgressBar;
