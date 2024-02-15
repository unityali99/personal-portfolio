import { Flex } from "@chakra-ui/react";
import { Alex_Brush } from "next/font/google";
import Link from "next/link";
import React from "react";
import NavbarMenu from "./NavbarMenu";

const alex_brush = Alex_Brush({ subsets: ["latin"], weight: "400" });

function Navbar() {
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center bg-transparent">
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
      <NavbarMenu />
    </header>
  );
}

export default Navbar;
