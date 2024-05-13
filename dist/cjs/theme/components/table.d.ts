export declare const tableTheme: {
    baseStyle?: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
        keys: ("table" | "thead" | "tbody" | "tr" | "th" | "td" | "tfoot" | "caption")[];
    }> | undefined;
    sizes?: {
        [key: string]: import("@chakra-ui/styled-system").PartsStyleInterpolation<{
            keys: ("table" | "thead" | "tbody" | "tr" | "th" | "td" | "tfoot" | "caption")[];
        }>;
    } | undefined;
    variants?: {
        campaign: {
            td: {
                fontSize: string;
                lineHeight: string;
                p: string;
                color: string;
            };
        };
        reports: {
            tr: {
                th: {
                    p: string;
                    textTransform: string;
                    fontWeight: string;
                    color: string;
                    borderBottom: string;
                };
                td: {
                    fontSize: string;
                    lineHeight: string;
                    p: string;
                    color: string;
                    borderBottom: string;
                };
                _last: {
                    td: {
                        borderBottom: string;
                    };
                };
            };
        };
        withoutBcg: {
            tr: {
                th: {
                    p: string;
                    textTransform: string;
                    fontWeight: string;
                    color: string;
                    borderBottom: string;
                };
                td: {
                    fontSize: string;
                    lineHeight: string;
                    p: string;
                    color: string;
                    borderBottom: string;
                };
                _last: {
                    td: {
                        borderBottom: string;
                    };
                };
            };
        };
    } | undefined;
    defaultProps?: {
        size?: string | number | undefined;
        variant?: "campaign" | "reports" | "withoutBcg" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
    parts: ("table" | "thead" | "tbody" | "tr" | "th" | "td" | "tfoot" | "caption")[];
};
