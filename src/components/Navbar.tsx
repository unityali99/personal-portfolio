"use client";
import { Box, Flex, IconButton } from "@chakra-ui/react";
import { Alex_Brush } from "next/font/google";
import Link from "next/link";
import React, { useState } from "react";
import NavbarMenu from "./NavbarMenu";
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";

const alex_brush = Alex_Brush({ subsets: ["latin"], weight: "400" });

function Navbar() {
  const [menuExpanded, setMenuExpanded] = useState(false);

  return (
    <header className="space-y-5">
      <Box className="flex flex-col sm:flex-row justify-between items-center bg-transparent space-y-3 sm:space-y-0">
        <h2 className={`${alex_brush.className} text-4xl`}>Ali Ahmadi</h2>
        <Flex
          display={{ base: "none", md: "flex" }}
          className="text-lg w-72"
          flexDir={"row"}
          justifyContent={"space-between"}
        >
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>CV</Link>
          <Link href={"/"}>Contact</Link>
        </Flex>
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={() => setMenuExpanded((expanded) => !expanded)}
          aria-label="menuIcon"
          icon={menuExpanded ? <IoMdClose /> : <CiMenuBurger />}
        />
      </Box>
      <NavbarMenu expanded={menuExpanded} />
    </header>
  );
}

export default Navbar;
