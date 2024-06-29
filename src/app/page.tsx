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
import { projects } from "@/utils/projects";
import { skills } from "@/utils/skills";
import { studies } from "@/utils/studies";
import { Box, Center, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <Box>
      <main className="-z-10 flex flex-col-reverse items-center lg:flex-row justify-around lg:items-end md:-translate-y-28 mb-10 md:mb-0">
        <VStack align={"start"} className="space-y-5 mt-10 lg:mt-0">
          <Box className="space-y-3">
            <Title>
              {"I'm Ali"}
              <br className="hidden lg:block" />
              {" Ahmadi"}
            </Title>
            <Text className="text-xs   md:text-xl xl:text-2xl font-light">
              {"Node.js Web Developer - React.js & React Native"}
            </Text>
          </Box>
          <DownloadButton>{"Download CV"}</DownloadButton>
        </VStack>
        <MainPicture src="/me.jpg" />
      </main>
      <hr />
      <Flex className="my-20 flex-col lg:flex-row justify-evenly items-center space-y-10 lg:space-y-0">
        <Box
          className="relative w-9/12 sm;w-6/12 lg:w-3/12 text-center"
          style={{ height: "40rem" }}
        >
          <Image
            alt="karate"
            src={"/karate.jpg"}
            fill
            objectFit="cover"
            quality={100}
            className="rounded-lg"
          />
        </Box>
        <Box className="w-full px-10 sm:px-8 lg:w-6/12 space-y-5 lg:space-y-0">
          <Title>About</Title>
          <Text className="text-justify text-xs md:text-base">{about}</Text>
        </Box>
      </Flex>
      <hr />
      <Center my={20}>
        <Title>Skills</Title>
      </Center>
      <Box className="overflow-x-scroll">
        <Box className="flex flex-row justify-between space-x-10 py-7 w-[800%] sm:w-[400%] sm:px-0">
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
      <Box className="flex flex-col lg:flex-row justify-between xl:justify-evenly lg:space-x-10 ">
        <Box className="space-y-8">
          <DividedTitle title="Language" />
          {languages.map((obj, index) => (
            <Flex
              flexDirection={"column"}
              className="space-y-2"
              width={`${obj.progress}%`}
              key={index}
            >
              <div className="text-sm md:text-base xl:text-xl">{obj.lang}</div>
              <div className="self-end text-xs md:text-xs font-light ">
                {obj.level}
              </div>
              <GradientProgressBar />
            </Flex>
          ))}
        </Box>
        <Box className="space-y-8">
          <DividedTitle title="Studies" />

          {studies.map((value, index) => (
            <Flex flexDir={"row"} align={"center"} key={index}>
              <Icon src="/icons/book-icon.png" />
              <Box className="ml-5">
                <div className="text-sm md:text-base xl:text-lg">{value}</div>
                <div className="text-xs xl:text-sm font-sans font-extralight text-slate-400">
                  Software Engineering
                </div>
              </Box>
            </Flex>
          ))}
        </Box>
      </Box>
      <Box className="space-y-20 my-32">
        <Center>
          <Title>My Projects</Title>
        </Center>
        <Flex flexFlow={"wrap"} justifyContent={"center"} className=" sm:mx-0">
          {projects.map(({ src, title }, index) => (
            <Image
              className="m-2"
              key={index}
              src={src}
              alt={title}
              width={500}
              height={500}
              quality={100}
            />
          ))}
        </Flex>
      </Box>
      <Box className="text-center space-y-6 my-20">
        <Text className="text-2xl md:text-4xl lg:text-5xl">
          Interested in my work
        </Text>
        <Text className="text-xs md:text-sm text-slate-400">
          Download my CV to know more about me
        </Text>
        <DownloadButton>Download CV</DownloadButton>
      </Box>
    </Box>
  );
}
