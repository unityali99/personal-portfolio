"use client";

import DownloadButton from "@/components/DownloadButton";
import MainPicture from "@/components/MainPicture";
import Title from "@/components/Title";
import { backgroundColor } from "@/theme";
import { about } from "@/utils/about";
import { skills } from "@/utils/skills";
import {
  Box,
  Center,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  buildStyles,
  CircularProgressbar,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";

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
      <Box className="overflow-x-scroll">
        <Box
          className="flex flex-row justify-between space-x-10 py-7 "
          style={{ width: "400%" }}
        >
          {skills.map((skill, index) => (
            <CircularProgressbarWithChildren
              className=""
              key={index}
              styles={buildStyles({
                pathColor: skill.color,
                strokeLinecap: "rounded",
                pathTransitionDuration: 0.5,
              })}
              value={skill.value}
            >
              <div className="w-10/12 wtext-wrap text-2xl text-center ">
                {skill.title}
              </div>
            </CircularProgressbarWithChildren>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
