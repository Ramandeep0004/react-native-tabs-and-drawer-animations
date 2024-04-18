import { StatusBar, StyleSheet, Text } from 'react-native';
import { View } from 'react-native-ui-lib';
import { colors } from '../../../assets/colors';
import { dpFont } from '../../../assets/sizes';
import { useIsFocused } from '@react-navigation/native';


export const Empty = () => {
    return (
        <View style={styles.conatainer}>
            {
                useIsFocused() ?
                    <StatusBar
                        translucent={true}
                        backgroundColor={colors.transparent}
                        barStyle="light-content"
                    />
                    :
                    null
            }
            <Text style={{ color: colors.secondPrimary, fontSize: dpFont(24) }}>This is Home screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conatainer: {
        flex: 1,
        backgroundColor: colors.yellow,
        justifyContent: 'center',
        alignItems: 'center'
    }
})