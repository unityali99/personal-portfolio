"use client";

import CircularProgressBar from "@/components/CircularProgressBar";
import DividedTitle from "@/components/DividedTitle";
import DownloadButton from "@/components/DownloadButton";
import GradientProgressBar from "@/components/GradientProgressBar";
import Icon from "@/components/Icon";
import MainPicture from "@/components/MainPicture";
import Title from "@/components/Title";
import { about } from "@/utils/about";
import { lang as languages } from "@/utils/lang";
import { skills } from "@/utils/skills";
import { studies } from "@/utils/studies";
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
      <Box className="overflow-x-scroll">
        <Box
          className="flex flex-row justify-between space-x-10 py-7 "
          style={{ width: "400%" }}
        >
          {skills.map((skill, index) => (
            <CircularProgressBar
              key={index}
              progress={skill.value}
              text={skill.title}
              color={skill.color}
            />
          ))}
        </Box>
      </Box>
      <Box className="flex justify-evenly">
        <Box className="space-y-8">
          <DividedTitle title="Language" />
          {languages.map((obj, index) => (
            <Flex
              flexDirection={"column"}
              className="space-y-2"
              width={`${obj.progress}%`}
              key={index}
            >
              <div className="text-xl">{obj.lang}</div>
              <div className="self-end text-xs font-light ">{obj.level}</div>
              <GradientProgressBar />
            </Flex>
          ))}
        </Box>
        <Box className="space-y-8">
          <DividedTitle title="Studies" />

          {studies.map((value, index) => (
            <Flex flexDir={"row"} align={"center"} key={index}>
              <Icon src="/icons/book-icon.png" />
              <Box className="mx-5">
                <div className="text-lg">{value}</div>
                <div className="text-sm font-sans font-extralight text-slate-400">
                  Software Engineering
                </div>
              </Box>
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
