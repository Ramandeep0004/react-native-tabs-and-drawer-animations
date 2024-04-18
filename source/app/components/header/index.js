import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Header } from '@rneui/themed'
import { dpWidth } from '../../../assets/sizes';
import Icons from '../../../helpers/IconComponent';
import { IconsName, IconsType } from '../../../assets/icons';
import { colors } from '../../../assets/colors';
import { styles } from './style';



export const HeaderComponet = (props) => {
    return (
        <Header
            placement="center"
            containerStyle={styles.container}
            style={styles.header}
            leftComponent={
                props.left === 'menu'
                    ?
                    <TouchableOpacity onPress={() => props.navigation.openDrawer()}>
                        <View style={styles.iconMian}>
                            <Icons
                                type={IconsType.simpleLineIcons}
                                name={IconsName.menu}
                                color={colors.black}
                                size={dpWidth(6)}
                            />
                        </View>
                    </TouchableOpacity>
                    :
                    null
            }
            centerComponent={{ text: props.title, style: styles.title }}
            rightComponent={
                props.right === 'profile'
                    ?
                    <View style={styles.iconMian}>
                        <Icons
                            type={IconsType.ionIcon}
                            name={IconsName.mdMenuOutline}
                            color={colors.black}
                            size={dpWidth(5)}
                        />
                    </View>
                    :
                    null
            }
            statusBarProps={{
                barStyle: 'light-content',
                backgroundColor: colors.transparent,
                translucent: true
            }}
        />
    );
};

export default Header;