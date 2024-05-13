export declare const cardTheme: {
    baseStyle?: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
        keys: ("body" | "footer" | "header" | "container")[];
    }> | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("body" | "footer" | "header" | "container")[];
        }>;
    } | undefined;
    variants?: {
        client: {
            container: {
                borderRadius: string;
                boxShadow: string;
            };
            header: {
                paddingBottom: string;
            };
            body: {
                ".chakra-link": {
                    fontWeight: string;
                    color: string;
                    textDecoration: string;
                    mb: string;
                    fontSize: string;
                };
                p: {
                    fontSize: "14px";
                };
                ".chakra-badge": {
                    position: string;
                    left: string;
                    top: string;
                };
            };
            footer: {
                paddingTop: string;
            };
        };
        campaign: {
            container: {
                borderRadius: string;
                boxShadow: string;
            };
            header: {
                paddingBottom: string;
            };
            body: {
                a: {
                    fontWeight: string;
                    color: string;
                    fontSize: string;
                };
                p: {
                    fontSize: "14px";
                };
                ".chakra-badge": {};
            };
            footer: {
                paddingTop: string;
            };
        };
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: "client" | "campaign" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("body" | "footer" | "header" | "container")[];
};
