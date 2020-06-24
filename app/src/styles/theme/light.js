import { lighten } from 'polished';

const getColorPallette = (color) => (
    {
        main: color,
        80: lighten(0.8, color),
        50: lighten(0.5, color),
    }
);

const LightTheme = {
    type: 'Light',
    colors: {
        primary: getColorPallette('#FF1300'),
        secondary: getColorPallette('#FF9100'),
        accent: getColorPallette('#FF006F'),
        background: '#ffffff'
    },
    text: getColorPallette('#000000')
};

export default LightTheme;
