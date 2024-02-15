import { IconButton } from "@chakra-ui/react";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";

function NavbarMenu() {
  return (
    <IconButton
      display={{ base: "flex", md: "none" }}
      aria-label="menuIcon"
      icon={<CiMenuBurger />}
    />
  );
}

export default NavbarMenu;
