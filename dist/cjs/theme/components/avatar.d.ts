export declare const avatarTheme: {
    baseStyle?: {
        badge: {
            bg: string;
            border: string;
        };
        container: {
            borderRadius: string;
        };
        excessLabel: {
            bg: string;
            color: string;
            borderRadius: string;
        };
    } | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("label" | "group" | "container" | "badge" | "excessLabel")[];
        }>;
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("label" | "group" | "container" | "badge" | "excessLabel")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("label" | "group" | "container" | "badge" | "excessLabel")[];
};
