import { Dimensions } from 'react-native';
import { dpFont } from './sizes';
const width = Dimensions.get('window').width;

export const Dimension = {
    windowWidth: width,
    width: '100%',
    height: '100%',
    medium: dpFont(20),
    semimedium: dpFont(18),
    small: dpFont(16),
    large: dpFont(22),
    large2 : dpFont(24),
    large3 : dpFont(26),
    Large : dpFont(30),
    semilarge: dpFont(25),
    big: dpFont(28),
    verysmall: dpFont(14),
    Big : dpFont(34)
};
