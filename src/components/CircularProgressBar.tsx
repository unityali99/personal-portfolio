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
    <Box className="flex flex-col items-center space-y-8">
      <CircularProgressbarWithChildren
        styles={buildStyles({
          pathColor: color,
          strokeLinecap: "rounded",
          pathTransitionDuration: 0.5,
          textSize: "13px",
          trailColor: "#0000",
        })}
        value={progress}
        text={`${progress}%`}
      />
      <div className="text-xl">{text}</div>
    </Box>
  );
}

export default CircularProgressBar;
