import { StyleSheet } from "react-native";
import { colors } from "../../../assets/colors";
import { dpFont, dpHeight, dpWidth } from "../../../assets/sizes";
import { Font } from "../../../assets/fontfamily";


export const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0,
        backgroundColor: colors.yellow,
        paddingBottom: dpHeight(3),
        paddingTop: dpHeight(3),
        paddingHorizontal: dpWidth(3),
        alignItems: 'center'
    },
    header: {
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#cfcfcf',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: dpFont(24),
        color: '#fff',
        fontFamily: Font.medium,
        alignItems: 'center',
        justifyContent: 'center',
        textTransform: 'capitalize'
    },
    iconMian: {
        backgroundColor: colors.white,
        paddingVertical: dpHeight(1),
        paddingHorizontal: dpWidth(3),
        borderRadius: 10,
    },
    icon: {
        height: dpHeight(5),
        width: dpWidth(5),
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
    },
});