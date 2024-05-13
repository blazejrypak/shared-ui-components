declare const _default: {
    baseStyle?: {
        outline: string;
        border: string;
        _hover: {
            border: string;
        };
        _focus: {
            outline: string;
        };
        _focusVisible: {
            boxShadow: string;
        };
    } | undefined;
    sizes?: {
        small: {};
        md: {};
    } | undefined;
    variants?: {
        'close-button': {
            bg: string;
            p: string;
            borderRadius: string;
            color: string;
            fontWeight: string;
            fontSize: string;
            textAlign: string;
            borderColor: string;
            _hover: {
                color: string;
                textDecoration: string;
                opacity: number;
                bg: string;
                borderColor: string;
            };
        };
        'back-button': {
            bg: string;
            p: string;
            borderRadius: string;
            color: string;
            fontWeight: string;
            fontSize: string;
            textAlign: string;
            _hover: {
                color: string;
                textDecoration: string;
                opacity: number;
                borderColor: string;
            };
        };
        'next-button': {
            bg: string;
            p: string;
            borderRadius: string;
            color: string;
            fontWeight: string;
            fontSize: string;
            textAlign: string;
            _hover: {
                color: string;
                textDecoration: string;
                opacity: number;
                borderColor: string;
            };
        };
        'final-button': {
            bg: string;
            p: string;
            borderRadius: string;
            color: string;
            fontWeight: string;
            fontSize: string;
            textAlign: string;
            _hover: {
                color: string;
                textDecoration: string;
                opacity: number;
                borderColor: string;
            };
        };
        'reject-button': {
            bg: string;
            p: string;
            borderRadius: string;
            borderColor: string;
            color: string;
            fontWeight: string;
            fontSize: string;
            textAlign: string;
            _hover: {
                color: string;
                textDecoration: string;
                opacity: number;
                bg: string;
                borderColor: string;
            };
        };
        'reject-button-full-fill': {
            bg: string;
            p: string;
            borderRadius: string;
            borderColor: string;
            color: string;
            fontWeight: string;
            fontSize: string;
            textAlign: string;
            _hover: {
                color: string;
                textDecoration: string;
                opacity: number;
                bg: string;
                borderColor: string;
            };
            _focusVisible: {
                boxShadow: string;
            };
        };
    } | undefined;
    defaultProps?: {
        size?: "small" | "md" | undefined;
        variant?: "close-button" | "back-button" | "next-button" | "final-button" | "reject-button" | "reject-button-full-fill" | undefined;
        colorScheme?: string | undefined;
    } | undefined;
};
export default _default;
