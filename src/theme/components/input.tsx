import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    inputAnatomy.keys
);

const baseStyle = definePartsStyle({
    defaultProps: {
        size: 'xl',
    },
    field: {
        height: '40px',
    },
    element: {
        width: '2.5rem'
    }
});

export const inputTheme = defineMultiStyleConfig({ baseStyle });
