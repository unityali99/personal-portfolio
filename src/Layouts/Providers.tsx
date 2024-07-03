import theme from "@/theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React, { ReactNode } from "react";

function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
}

export default Providers;
