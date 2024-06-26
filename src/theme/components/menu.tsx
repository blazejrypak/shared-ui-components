import { menuAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
    menuAnatomy.keys
);

// define the base component styles
const baseStyle = definePartsStyle({
    // define the part you're going to style
    button: {
    },
    list: {
        // this will style the MenuList component
        py: '2',
        border: 'none',
        bg: 'rgba(249, 249, 249, 1)',
        borderRadius: '0px'
    },
    item: {
        // this will style the MenuItem and MenuItemOption components
        _hover: {
            textDecorationColor: 'rgba(0, 0, 0, 1)',
            outline: 'none',
            border: 'none'
        },
        _focus: {
            outline: 'none',
            border: 'none'
        },
        color: 'rgba(82, 90, 102, 1)',
        borderRadius: '0px',
        backgroundColor: 'rgba(249, 249, 249, 1)',
        lineHeight: '1.5',
        textUnderlineOffset: '0.2em',
        textDecoration: 'underline 0.05em rgba(0, 0, 0, 0)',
        transition: 'text-decoration-color 300ms',
        height: '30px'
    },
    groupTitle: {
        // this will style the text defined by the title prop
        // in the MenuGroup and MenuOptionGroup components
        // textTransform: 'uppercase',
        // color: 'white',
        // textAlign: 'center',
        // letterSpacing: 'wider',
        // opacity: '0.7'
    },
    command: {
        // this will style the text defined by the command
        // prop in the MenuItem and MenuItemOption components
        // opacity: '0.8',
        // fontFamily: 'mono',
        // fontSize: 'sm',
        // letterSpacing: 'tighter',
        // pl: '4'
    },
    divider: {
        // this will style the MenuDivider component
        // my: '4',
        // borderColor: 'white',
        // borderBottom: '2px dotted'
    }
});
// export the base styles in the component theme
export const menuTheme = defineMultiStyleConfig({ baseStyle });
