import { rgba } from 'polished';

const getColorPallette = (color) => (
    {
        main: color,
        light: rgba(color, 0.8),
        lighten: rgba(color, 0.5),
        lightest: rgba(color, 0.25),
    }
);

const LightTheme = {
    type: 'Light',
    colors: {
        primary: getColorPallette('#FF1300'),
        secondary: getColorPallette('#FF7C00'),
        accent: getColorPallette('#FF006F'),
        gray: getColorPallette('#F2F2F2'),
        danger: getColorPallette('#EF3E2D'),
        success: getColorPallette('#28B67A'),
        info: getColorPallette('#4995DF'),
        black: getColorPallette('#000000'),
        white: '#ffffff',
        background: '#ffffff',
    },
    text: getColorPallette('#000000'),
};

export default LightTheme;
