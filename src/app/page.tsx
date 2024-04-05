import { Box, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="-z-10 flex flex-row justify-around items-end -translate-y-28">
      <VStack align={"start"} className="space-y-5">
        <Box className="space-y-3">
          <Text className="xl:text-8xl">
            {"I'm Ali"}
            <br />
            {" Ahmadi"}
          </Text>
          <Text className="xl:text-2xl font-light">
            {"Node.js Web Developer - React.js & React Native"}
          </Text>
        </Box>
        <Box
          as="button"
          color={"white"}
          py={4}
          px={16}
          className="rounded-md mx-auto xl:text-xl bg-gradient-to-b from-cyan-500 from-10% to-90% to-blue-800"
        >
          Download CV
        </Box>
      </VStack>
      <Box className="relative w-4/12" style={{ height: "35rem" }}>
        <Image
          alt="me"
          src={"/me.jpg"}
          fill
          objectFit="cover"
          quality={100}
          className="rounded-lg h-96"
        />
      </Box>
    </main>
  );
}
