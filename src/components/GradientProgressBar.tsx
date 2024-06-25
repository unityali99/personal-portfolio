import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

function GradientProgressBar() {
  return (
    <ProgressBar
      customLabel={" "}
      completed={100}
      baseBgColor="#00000"
      bgColor="linear-gradient(90deg, hsla(245, 97%, 57%, 1) 10%, hsla(180, 82%, 43%, 1) 75%)"
    />
  );
}

export default GradientProgressBar;
