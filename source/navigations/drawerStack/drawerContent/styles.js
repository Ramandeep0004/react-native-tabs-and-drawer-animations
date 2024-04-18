
import { Platform, StyleSheet } from 'react-native'
import { colors } from '../../../assets/colors';
import { dpFont, dpHeight, dpImageHeight, dpImageWidth, dpWidth } from '../../../assets/sizes';
import { Font } from '../../../assets/fontfamily';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.secondPrimary,
        paddingTop: Platform.OS === "ios" ? dpHeight(6) : dpHeight(0)
    },
    scroll: {
        flexGrow: 1,
        paddingTop: dpHeight(0.5),
        paddingBottom: dpHeight(7)
    },
    scrollCont: {
        flexGrow: 1,
        paddingBottom: Platform.OS === "ios" ? dpHeight(15) : dpHeight(24)
    },
    body: {
        flexGrow: 1,
        paddingLeft: dpHeight(2.5),
    },
    name2: {
        marginLeft: dpHeight(-1),
        fontSize: dpFont(16),
        color: colors.white,
        fontFamily: Font.medium,
    },
    closeIconMain: {
        marginTop: Platform.OS === 'ios' ? dpHeight(2) : dpHeight(7),
        marginBottom: Platform.OS === 'ios' ? dpHeight(2) : dpHeight(2),
        marginHorizontal: dpWidth(4)
    },
    iconMain: {
        height: dpHeight(4.2),
        width: dpWidth(8.4),
        backgroundColor: colors.lightGrey2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: dpHeight(0.5)
    },
    iconMain2: {
        height: dpHeight(4.2),
        width: dpWidth(8.4),
        backgroundColor: colors.transparent,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: dpHeight(0.5)
    },
    content: {
        flex: 1,
        marginHorizontal: dpHeight(-1)
    },
});