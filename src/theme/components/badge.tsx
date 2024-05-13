import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const waiting = defineStyle({
    background: "#EFC325",
    color: "#171D26",
    fontSize: "9px",
    fontWeight: "400",
    padding: "5px 8px",
    borderRadius: "2px",
    textTransform: "normal",
});

const success = defineStyle({
    background: "#1BC30C",
    color: "#fff",
    fontSize: "9px",
    fontWeight: "400",
    padding: "5px 8px",
    borderRadius: "2px",
    textTransform: "normal",
});

const successTable = defineStyle({
    background: "#1BC30C",
    color: "#fff",
    fontSize: "13px",
    fontWeight: "400",
    padding: "8px 10px",
    textTransform: "normal",
    borderRadius: "10px",
    boxShadow: "1px 2px 3px #4676fb78",
});

export const badgeTheme = defineStyleConfig({
    variants: { waiting, success, successTable },
});
