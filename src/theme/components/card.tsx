import { cardAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(cardAnatomy.keys);

const variants = {
    client: definePartsStyle({
        container: {
            borderRadius: "20px",
            boxShadow: "0px 4px 13px 0 #0000001c",
        },
        header: {
            paddingBottom: "2px",
        },
        body: {
            ".chakra-link": {
                fontWeight: "bold",
                color: "#525A66",
                textDecoration: "underline",
                mb: ".3rem",
                fontSize: "18px",
            },
            p: {
                fontSize: "14px",
            },
            ".chakra-badge": {
                position: "absolute",
                left: "15px",
                top: "15px",
            },
        },
        footer: {
            paddingTop: "2px",
        },
    }),
    campaign: definePartsStyle({
        container: {
            borderRadius: "10px",
            boxShadow: "none",
        },
        header: {
            paddingBottom: "2px",
        },
        body: {
            a: {
                fontWeight: "bold",
                color: "#171D26",

                fontSize: "12px",
            },
            p: {
                fontSize: "14px",
            },
            ".chakra-badge": {},
        },
        footer: {
            paddingTop: "2px",
        },
    }),
};

export const cardTheme = defineMultiStyleConfig({ variants });

