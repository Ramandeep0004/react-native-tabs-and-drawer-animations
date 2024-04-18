import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TypeOne, TypeTwo } from "react-native-animated-bottom-tabbar";
import { colors } from '../../assets/colors';
import { IconsName, IconsType } from '../../assets/icons';
import { LogBox } from 'react-native';
import { dpWidth } from '../../assets/sizes';
import Icons from '../../helpers/IconComponent';
import { useNavigation } from '@react-navigation/native';
import { HeaderComponet } from '../../app/components/header';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { useDrawerProgress } from '@react-navigation/drawer';


const icons = [
    <Icons
        type={IconsType.feather}
        name={IconsName.home4}
        color={colors.primary}
        size={dpWidth(6)}
    />,
    <Icons
        type={IconsType.antDesign}
        name={IconsName.calendar}
        color={colors.primary}
        size={dpWidth(6)}
    />,
    <Icons
        type={IconsType.antDesign}
        name={IconsName.setting}
        color={colors.primary}
        size={dpWidth(6)}
    />,
    <Icons
        type={IconsType.antDesign}
        name={IconsName.heart2}
        color={colors.primary}
        size={dpWidth(6)}
    />,
    <Icons
        type={IconsType.antDesign}
        name={IconsName.user2}
        color={colors.primary}
        size={dpWidth(6)}
    />
];

export const Tabs = (props) => {
    const drawerProgress = useDrawerProgress();

    const viewStyle = useAnimatedStyle(() => {
        const scale = interpolate(
            drawerProgress.value,
            [0, 0.36],
            [1, 0.9]
        )

        const borderRadius = interpolate(
            drawerProgress.value,
            [0, 0.1],
            [0, 3]
        )

        return {
            transform: [{ scale }],
            borderRadius,
        }
    })

    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
    }, []);


    const handleNavigation = (value) => {
        if (value === 1) {
            // navigation.navigate('')
        }
        else if (value === 2) {
            // navigation.navigate('')
        }
        else return;
    };


    return (
        <Animated.View style={[{ flex: 1, overflow: 'hidden' }, viewStyle]}>
            <View style={styles.container}>
                <HeaderComponet
                    left={"menu"}
                    navigation={props.navigation}
                />
                <Text style={styles.welcome}>Welcome to React Native Animations!</Text>
                <TypeTwo // you can use TypeOne Also With the same settings
                    icons={icons} //array of icon views this array can be image or vector icon
                    selectedColor={'#FF8F00'} //color of selected item in tab bar
                    backgroundColor={'#fff'} //background color of tab bar
                    onSelect={(val) => handleNavigation(val)} //on select an item , index starts at 1 :-D
                />
            </View>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.yellow,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
