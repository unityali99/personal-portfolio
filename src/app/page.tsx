import { Box, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-row justify-around">
      <VStack align={"start"} className="space-y-5">
        <Box className="space-y-3">
          <Text className="text-6xl">{"I'm Ali Ahmadi"}</Text>
          <Text className="text-xl font-light">
            {"Node.js Web Developer - React.js & React Native"}
          </Text>
        </Box>
        <Box
          as="button"
          color={"white"}
          bg={"blueviolet"}
          py={3}
          px={7}
          className="rounded-md mx-auto"
        >
          Download CV
        </Box>
      </VStack>
      <Image
        alt="me"
        src={"/216259.jpg"}
        width={400}
        height={100}
        className="-translate-y-28 -z-10"
      />
    </main>
  );
}
