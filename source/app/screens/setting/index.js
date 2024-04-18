import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native-ui-lib';
import { colors } from '../../../assets/colors';
import { dpFont } from '../../../assets/sizes';


export const Settings = () => {
    return (
        <View style={styles.conatainer}>
            <Text style={{ color: '#fff', fontSize: dpFont(24) }}>This is Settings screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    }
})