export declare const badgeTheme: {
    baseStyle?: import("@chakra-ui/styled-system").SystemStyleInterpolation | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").SystemStyleInterpolation;
    } | undefined;
    variants?: {
        waiting: {
            background: string;
            color: string;
            fontSize: string;
            fontWeight: string;
            padding: string;
            borderRadius: string;
            textTransform: string;
        };
        success: {
            background: string;
            color: string;
            fontSize: string;
            fontWeight: string;
            padding: string;
            borderRadius: string;
            textTransform: string;
        };
        successTable: {
            background: string;
            color: string;
            fontSize: string;
            fontWeight: string;
            padding: string;
            textTransform: string;
            borderRadius: string;
            boxShadow: string;
        };
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: "waiting" | "success" | "successTable" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
};
