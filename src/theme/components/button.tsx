import { defineStyleConfig } from '@chakra-ui/react';

export default defineStyleConfig({
    // Styles for the base style
    baseStyle: {
        outline: 'none',
        border: 'none',
        _hover: {
            border: 'none'
        },
        _focus: {
            outline: 'none',
        },
        _focusVisible: {
            boxShadow: 'none',
        }
    },
    // Styles for the size variations
    sizes: {
        small: {},
        md: {}
    },
    // Styles for the visual style variations
    variants: {
        'close-button': {
            bg: 'transparent',
            p: '20px 40px',
            borderRadius: '4px',
            color: '#171D26',
            fontWeight: 'bold',
            fontSize: '14px',
            textAlign: 'center',
            borderColor: '#25E1EF',
            _hover: {
                color: '#171D26',
                textDecoration: 'none',
                opacity: 0.9,
                bg: '#ececec',
                borderColor: '#25E1EF'
            }
        },
        'back-button': {
            bg: '#b7edf1',
            p: '20px 40px',
            borderRadius: '4px',
            color: '#171D26',
            fontWeight: 'bold',
            fontSize: '14px',
            textAlign: 'center',
            _hover: {
                color: '#171D26',
                textDecoration: 'none',
                opacity: 0.9,
                borderColor: '#22E1EF'
            }
        },
        'next-button': {
            bg: '#22E1EF',
            p: '20px 40px',
            borderRadius: '4px',
            color: '#171D26',
            fontWeight: 'bold',
            fontSize: '14px',
            textAlign: 'center',
            _hover: {
                color: '#171D26',
                textDecoration: 'none',
                opacity: 0.9,
                borderColor: '#22E1EF'
            }
        },
        'final-button': {
            bg: '#1BC30C',
            p: '20px 40px',
            borderRadius: '4px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px',
            textAlign: 'center',
            _hover: {
                color: '#171D26',
                textDecoration: 'none',
                opacity: 0.9,
                borderColor: '#22E1EF'
            }
        },
        'reject-button': {
            bg: 'transparent',
            p: '20px 40px',
            borderRadius: '4px',
            borderColor: '#F13939',
            color: '#F13939',
            fontWeight: 'bold',
            fontSize: '14px',
            textAlign: 'center',
            _hover: {
                color: '#fff',
                textDecoration: 'none',
                opacity: 0.9,
                bg: '#F13939',
                borderColor: '#F13939'
            }
        },
        'reject-button-full-fill': {
            bg: '#F13939',
            p: '20px 40px',
            borderRadius: '4px',
            borderColor: '#F13939',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '14px',
            textAlign: 'center',
            _hover: {
                color: '#fff',
                textDecoration: 'none',
                opacity: 0.9,
                bg: '#F13939',
                borderColor: '#F13939'
            },
            _focusVisible: {
                boxShadow: 'none'
            }
        }
    },
    // The default `size` or `variant` values
    defaultProps: {}
});
