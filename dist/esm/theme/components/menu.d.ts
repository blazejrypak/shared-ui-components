export declare const menuTheme: {
    baseStyle?: {
        button: {};
        list: {
            py: string;
            border: string;
            bg: string;
            borderRadius: string;
        };
        item: {
            _hover: {
                textDecorationColor: string;
                outline: string;
                border: string;
            };
            _focus: {
                outline: string;
                border: string;
            };
            color: string;
            borderRadius: string;
            backgroundColor: string;
            lineHeight: string;
            textUnderlineOffset: string;
            textDecoration: string;
            transition: string;
            height: string;
        };
        groupTitle: {};
        command: {};
        divider: {};
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("button" | "icon" | "item" | "list" | "groupTitle" | "command" | "divider")[];
        }>;
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("button" | "icon" | "item" | "list" | "groupTitle" | "command" | "divider")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("button" | "icon" | "item" | "list" | "groupTitle" | "command" | "divider")[];
};
