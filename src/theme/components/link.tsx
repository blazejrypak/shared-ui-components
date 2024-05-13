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
    textLink: {
      fontWeight: "medium",
      mb: "10px",
      display: "inline-block",
      color: "#525A66",
      _hover: {
        color: "#525A66",
        cursor: "pointer",
        textDecoration: "underline 0.15em #535A66",
        textUnderlineOffset: "0.4em",
      },
      transition: "text-decoration-color 300ms, text-underline-offset 300ms",
      textDecoration: "underline 0.15em rgba(0, 0, 0, 0)",
      textUnderlineOffset: "0.15em",
    },
    default: {
      bg: "#22E1EF",
      p: "15px 40px",
      borderRadius: "4px",
      color: "#171D26",
      fontWeight: "bold",
      fontSize: "14px",
      textAlign: "center",
      display: "inline-block",
      _hover: {
        color: "#171D26",
        textDecoration: "none",
        opacity: 0.9,
      },
    },
    defaultSmall: {
      bg: "#22E1EF",
      p: "9px 15px",
      borderRadius: "4px",
      color: "#171D26",
      fontWeight: "bold",
      fontSize: "12px",
      textAlign: "center",
      display: "block",
      _hover: {
        color: "#171D26",
        textDecoration: "none",
        opacity: 0.9,
      },
    },
    tableReportButton: {
      bg: "#fff",
      p: "9px 15px",
      borderRadius: "4px",
      color: "#0FAAB6",
      fontWeight: "800",
      fontSize: "11px",
      textAlign: "center",
      borderColor: "#C0C0C0",
      borderWidth: "1px",
      display: "block",
      _hover: {
        bg: "#0FAAB6",
        color: "#fff",
        textDecoration: "none",
        opacity: 0.9,
      },
    },
    tableReportButton2: {
      bg: "transparent",
      p: "6px 10px 6px 0",
      borderRadius: "4px",
      color: "#0FAAB6",
      fontWeight: "800",
      fontSize: "11px",
      textAlign: "center",
      borderColor: "transparent",
      borderWidth: "1px",
      display: "block",
      _hover: {
        bg: "white",
        color: "#0FAAB6",
        borderColor: "#C0C0C0",
        textDecoration: "none",
        opacity: 0.9,
      },
    },
    successModal: {
      bg: "#25E1EF",
      p: "10px 20px",
      borderRadius: "6px",
      color: "#171D26",
      fontWeight: "bold",
      fontSize: "14px",
      textAlign: "center",
      _hover: {
        color: "#171D26",
        textDecoration: "none",
        opacity: 0.9,
        borderColor: "#22E1EF",
      },
    },
  },
  // The default `size` or `variant` values
  defaultProps: {},
});
