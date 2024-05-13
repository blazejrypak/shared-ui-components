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
            keys: ("container" | "label" | "badge" | "excessLabel" | "group")[];
        }>;
    } | undefined;
    variants?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("container" | "label" | "badge" | "excessLabel" | "group")[];
        }>;
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: string | number | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("container" | "label" | "badge" | "excessLabel" | "group")[];
};
