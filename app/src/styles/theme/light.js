import { lighten } from 'polished';

const getColorPallette = (color) => (
    {
        main: color,
        light: lighten('0.8', color),
        lighten: lighten('0.5', color),
        lightest: lighten('0.2', color),
    }
);

const LightTheme = {
    type: 'Light',
    colors: {
        primary: getColorPallette('#FF1300'),
        secondary: getColorPallette('#FF9100'),
        accent: getColorPallette('#FF006F'),
        background: '#ffffff',
        white: '#ffffff',
        black: getColorPallette('#000000')
    },
    text: getColorPallette('#000000'),
};

export default LightTheme;
