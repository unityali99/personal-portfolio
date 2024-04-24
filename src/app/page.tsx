import DownloadButton from "@/components/DownloadButton";
import MainPicture from "@/components/MainPicture";
import Title from "@/components/Title";
import { about } from "@/utils/about";
import { Box, Center, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <Box>
      <main className="-z-10 flex flex-row justify-around items-end -translate-y-28">
        <VStack align={"start"} className="space-y-5">
          <Box className="space-y-3">
            <Title>
              {"I'm Ali"}
              <br />
              {" Ahmadi"}
            </Title>
            <Text className="xl:text-2xl font-light">
              {"Node.js Web Developer - React.js & React Native"}
            </Text>
          </Box>
          <DownloadButton>{"Download CV"}</DownloadButton>
        </VStack>
        <MainPicture src="/me.jpg" />
      </main>
      <hr />
      <Flex className="my-20 flex-row justify-evenly items-center">
        <Box className="relative w-2/12" style={{ height: "40rem" }}>
          <Image
            alt="karate"
            src={"/karate.jpg"}
            fill
            objectFit="cover"
            quality={100}
            className="rounded-lg"
          />
        </Box>
        <Box className="w-6/12">
          <Title>About</Title>
          <Text className="text-justify">{about}</Text>
        </Box>
      </Flex>
      <hr />
      <Center my={20}>
        <Title>Skills</Title>
      </Center>
      <Box className="overflow-x-scroll ">
        <Box
          className="flex flex-row justify-between h-96 mx-0 px-0"
          style={{ width: "200%" }}
        >
          <Box className="w-72 h-72 rounded-full relative bg-gradient-to-t from-gradientStart to-gradientEnd overflow-ellipsis">
            <Box className="w-4/5 h-4/5 m-0 absolute top-5 left-80 rounded-tl-full -translate-x-1/2 -translate-y-1/2 bg-dark "></Box>
            <Box className="w-4/5 h-4/5 rounded-full m-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark flex items-center justify-center">
              <Text className="text-6xl">80%</Text>
            </Box>
            <Text className="absolute -bottom-16 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
              Javascript
            </Text>
          </Box>

          <Box className="w-72 h-72 rounded-full relative bg-gradient-to-t from-gradientStart to-gradientEnd overflow-ellipsis">
            <Box className="w-4/5 h-4/5 m-0 absolute top-5 left-80 rounded-tl-full -translate-x-1/2 -translate-y-1/2 bg-dark "></Box>
            <Box className="w-4/5 h-4/5 rounded-full m-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark flex items-center justify-center">
              <Text className="text-6xl">80%</Text>
            </Box>
            <Text className="absolute -bottom-16 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
              Javascript
            </Text>
          </Box>

          <Box className="w-72 h-72 rounded-full relative bg-gradient-to-t from-gradientStart to-gradientEnd overflow-ellipsis">
            <Box className="w-4/5 h-4/5 m-0 absolute top-5 left-80 rounded-tl-full -translate-x-1/2 -translate-y-1/2 bg-dark "></Box>
            <Box className="w-4/5 h-4/5 rounded-full m-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark flex items-center justify-center">
              <Text className="text-6xl">80%</Text>
            </Box>
            <Text className="absolute -bottom-16 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
              Javascript
            </Text>
          </Box>

          <Box className="w-72 h-72 rounded-full relative bg-gradient-to-t from-gradientStart to-gradientEnd overflow-ellipsis">
            <Box className="w-4/5 h-4/5 m-0 absolute top-5 left-80 rounded-tl-full -translate-x-1/2 -translate-y-1/2 bg-dark "></Box>
            <Box className="w-4/5 h-4/5 rounded-full m-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark flex items-center justify-center">
              <Text className="text-6xl">80%</Text>
            </Box>
            <Text className="absolute -bottom-16 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
              Javascript
            </Text>
          </Box>

          <Box className="w-72 h-72 rounded-full relative bg-gradient-to-t from-gradientStart to-gradientEnd overflow-ellipsis">
            <Box className="w-4/5 h-4/5 m-0 absolute top-5 left-80 rounded-tl-full -translate-x-1/2 -translate-y-1/2 bg-dark "></Box>
            <Box className="w-4/5 h-4/5 rounded-full m-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark flex items-center justify-center">
              <Text className="text-6xl">80%</Text>
            </Box>
            <Text className="absolute -bottom-16 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
              Javascript
            </Text>
          </Box>

          <Box className="w-72 h-72 rounded-full relative bg-gradient-to-t from-gradientStart to-gradientEnd overflow-ellipsis">
            <Box className="w-4/5 h-4/5 m-0 absolute top-5 left-80 rounded-tl-full -translate-x-1/2 -translate-y-1/2 bg-dark "></Box>
            <Box className="w-4/5 h-4/5 rounded-full m-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark flex items-center justify-center">
              <Text className="text-6xl">80%</Text>
            </Box>
            <Text className="absolute -bottom-16 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
              Javascript
            </Text>
          </Box>

          <Box className="w-72 h-72 rounded-full relative bg-gradient-to-t from-gradientStart to-gradientEnd overflow-ellipsis">
            <Box className="w-4/5 h-4/5 m-0 absolute top-5 left-80 rounded-tl-full -translate-x-1/2 -translate-y-1/2 bg-dark "></Box>
            <Box className="w-4/5 h-4/5 rounded-full m-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark flex items-center justify-center">
              <Text className="text-6xl">80%</Text>
            </Box>
            <Text className="absolute -bottom-16 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
              Javascript
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
