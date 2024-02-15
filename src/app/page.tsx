import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <div className="text-6xl">{"I'm Ali Ahmadi"}</div>
      <Box
        as="button"
        color={"white"}
        bg={"blueviolet"}
        py={3}
        px={7}
        className="rounded-md"
      >
        Download CV
      </Box>
    </main>
  );
}
