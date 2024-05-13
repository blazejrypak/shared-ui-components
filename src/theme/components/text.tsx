import { defineStyleConfig } from "@chakra-ui/react";

export default defineStyleConfig({
    // Styles for the base style
    baseStyle: {
        color: "#525A66",
    },
    // Styles for the size variations
    sizes: {
        small: {},
        md: {},
    },
    // Styles for the visual style variations
    variants: {
        title: {
            fontSize: "33px",
            fontWeight: "bold",
        },
        subtitle: {
            fontSize: "27px",
            fontWeight: "bold",
        },
    },
    // The default `size` or `variant` values
    defaultProps: {},
});
