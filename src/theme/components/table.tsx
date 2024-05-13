import { tableAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys);

const variants = {
  campaign: definePartsStyle({
    td: {
      fontSize: "12px",
      lineHeight: "1.2",
      p: "4px 0",
      color: "#525A66",
    },
  }),
  reports: definePartsStyle({
    tr: {
      th: {
        p: "12px 4px",
        textTransform: "none",
        fontWeight: "normal",
        color: "#878790",
        borderBottom: "1px solid #E9EFF4",
      },
      td: {
        fontSize: "13px",
        lineHeight: "1.2",
        p: "4px",
        color: "#525A66",
        borderBottom: "1px solid #E9EFF4",
      },
      _last: {
        td: {
          borderBottom: "none",
        },
      },
    },
  }),
  withoutBcg: definePartsStyle({
    tr: {
      th: {
        p: "12px 4px",
        textTransform: "none",
        fontWeight: "normal",
        color: "#878790",
        borderBottom: "1px solid #E9EFF4",
      },
      td: {
        fontSize: "13px",
        lineHeight: "1.2",
        p: "4px",
        color: "#525A66",
        borderBottom: "1px solid #E9EFF4",
      },
      _last: {
        td: {
          borderBottom: "none",
        },
      },
    },
  }),
};

export const tableTheme = defineMultiStyleConfig({ variants });
