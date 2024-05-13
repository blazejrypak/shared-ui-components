export declare const inputTheme: {
    baseStyle?: {
        defaultProps: {
            size: string;
        };
        field: {
            height: string;
        };
        element: {
            width: string;
        };
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("group" | "addon" | "field" | "element")[];
        }>;
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("group" | "addon" | "field" | "element")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("group" | "addon" | "field" | "element")[];
};
