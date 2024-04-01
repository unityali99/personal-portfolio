import { VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

function NavbarMenu({ expanded }: { expanded: boolean }) {
  return (
    <VStack
      display={{ base: "flex", md: "none" }}
      className={`${
        expanded && "border"
      } rounded-lg overflow-hidden transition-all w-max px-10 mx-auto`}
      py={expanded ? 4 : 0}
      height={expanded ? 130 : 0}
      spacing={3}
      textAlign={"center"}
    >
      <Link href={"/"}>Home</Link>
      <Link href={"/cv"}>CV</Link>
      <Link href={"/contact"}>Contact</Link>
    </VStack>
  );
}

export default NavbarMenu;
