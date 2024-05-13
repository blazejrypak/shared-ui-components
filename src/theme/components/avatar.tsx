import { avatarAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(avatarAnatomy.keys);

const baseStyle = definePartsStyle({
    // define the part you're going to style
    badge: {
        bg: "gray.500",
        border: "2px solid",
    },
    container: {
        borderRadius: "xl",
    },
    excessLabel: {
        bg: "gray.800",
        color: "white",
        borderRadius: "xl",
    },
});

export const avatarTheme = defineMultiStyleConfig({ baseStyle });
