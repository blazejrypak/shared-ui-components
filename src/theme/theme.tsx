import { ThemeOverride, extendTheme } from "@chakra-ui/react";
import { avatarTheme } from "./components/avatar";
import { badgeTheme } from "./components/badge";
import button from "./components/button";
import { cardTheme } from "./components/card";
import link from "./components/link";
import { tableTheme } from "./components/table";
import text from "./components/text";
import { menuTheme } from "./components/menu";
import { inputTheme } from "./components/input";

export const theme: ThemeOverride = extendTheme({
  components: {
    Button: button,
    Avatar: avatarTheme,
    Menu: menuTheme,
    Text: text,
    Link: link,
    Card: cardTheme,
    Badge: badgeTheme,
    Table: tableTheme,
    Input: inputTheme,
  },
});
