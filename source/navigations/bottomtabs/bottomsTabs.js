import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { IconsName, IconsType } from "../../assets/icons"
import { View, StyleSheet, Easing } from "react-native"
import { Empty } from '../../app/screens/empty'
import LottieView from 'lottie-react-native';
import React, { useRef, useEffect, useState } from 'react';
import { Settings } from "../../app/screens/setting"
import { dpFont, dpHeight, dpWidth } from "../../assets/sizes"
import { colors } from "../../assets/colors"
import { Font } from "../../assets/fontfamily"
import Icons from "../../helpers/IconComponent";
import { HeaderComponet } from "../../app/components/header";
import { useDrawerProgress } from "@react-navigation/drawer";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";


let Tab = createBottomTabNavigator()
export const TabsOne = (props) => {
    let animationProgress1 = useRef(new Animated.Value(0));
    let animationProgress2 = useRef(new Animated.Value(0));
    let animationProgress3 = useRef(new Animated.Value(0));
    let animationProgress4 = useRef(new Animated.Value(0));
    let animationProgress5 = useRef(new Animated.Value(0));

    const [index, setIndex] = useState(null);

    // useEffect(() => {
    //     if (index === 0) {
    //         Animated.timing(animationProgress1.current, {
    //             toValue: 1,
    //             duration: 5000,
    //             easing: Easing.linear,
    //             useNativeDriver: false
    //         }).start();
    //     }
    //     else if (index === 1) {
    //         Animated.timing(animationProgress2.current, {
    //             toValue: 1,
    //             duration: 8000,
    //             easing: Easing.linear,
    //             useNativeDriver: false
    //         }).start();
    //     }
    //     else if (index === 2) {
    //         Animated.timing(animationProgress3.current, {
    //             toValue: 1,
    //             duration: 8000,
    //             easing: Easing.linear,
    //             useNativeDriver: false
    //         }).start();
    //     }
    //     else if (index === 3) {
    //         Animated.timing(animationProgress4.current, {
    //             toValue: 1,
    //             duration: 8000,
    //             easing: Easing.linear,
    //             useNativeDriver: false
    //         }).start();
    //     }
    //     else if (index === 4) {
    //         Animated.timing(animationProgress5.current, {
    //             toValue: 1,
    //             duration: 8000,
    //             easing: Easing.linear,
    //             useNativeDriver: false
    //         }).start();
    //     }
    //     else return;
    // }, [index])



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

    return (
        <Animated.View style={[{ flex: 1, overflow: 'hidden' }, viewStyle]}>
            <Tab.Navigator
                screenOptions={({ route, navigation }) => {
                    {
                        let state = navigation.getState()
                        setIndex(state.index)
                    }
                    return {
                        tabBarStyle: {
                            position: 'absolute',
                            backgroundColor: colors.white,
                            height: dpHeight(8),
                            borderTopWidth: 0,
                        },
                        tabBarActiveTintColor: colors.secondPrimary,
                        tabBarInactiveTintColor: colors.black,
                        tabBarLabelStyle: {
                            fontFamily: Font.regular,
                            fontSize: dpFont(14),
                            marginBottom: dpHeight(5),
                        },
                        tabBarShowLabel: false
                        // tabBarLabel: route.name === 'TrackingOrder' ? '' : route.name
                    }
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Empty}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                index === 0 ?
                                    <LottieView
                                        // progress={animationProgress1.current}
                                        source={require('../../assets/animatedIcons/home2.json')}
                                        loop
                                        autoPlay={focused}
                                        style={{ height: dpHeight(6) }}
                                    />
                                    :
                                    <View style={styles.iconMian2}>
                                        <Icons
                                            type={IconsType.feather}
                                            name={IconsName.home4}
                                            color={color}
                                            size={dpWidth(6)}
                                        />
                                    </View>
                            )
                        },
                        header: () => (
                            <HeaderComponet
                                left={"menu"}
                                navigation={props.navigation}
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name="Inbox"
                    component={Empty}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => {
                            return (
                                index === 1 ?
                                    <LottieView
                                        // progress={animationProgress2.current}
                                        source={require('../../assets/animatedIcons/chat2.json')}
                                        loop
                                        autoPlay={focused}
                                        style={{ height: dpHeight(6) }}
                                    />
                                    :
                                    <View style={styles.iconMian2}>
                                        <Icons
                                            type={IconsType.ionIcon}
                                            name={IconsName.chatbubbleOutline}
                                            color={color}
                                            size={dpWidth(6)}
                                        />
                                    </View>
                            )
                        },
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name="Tracking"
                    component={Settings}
                    options={{
                        tabBarIcon: ({ focused, color, size }) =>
                        (
                            index === 2 ?
                                <LottieView
                                    // progress={animationProgress3.current}
                                    source={require('../../assets/animatedIcons/foccus2.json')}
                                    loop
                                    autoPlay={focused}
                                    style={{ height: dpHeight(6), color: '#4992f2' }}
                                />
                                :
                                <View style={styles.iconMian2}>
                                    <Icons
                                        type={IconsType.materialIcons}
                                        name={IconsName.centerFocusWeak}
                                        color={color}
                                        size={dpWidth(6)}
                                    />
                                </View>
                        ),
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Notifications"
                    component={Empty}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            index === 3 ?
                                <LottieView
                                    // progress={animationProgress4.current}
                                    source={require('../../assets/animatedIcons/bell.json')}
                                    loop
                                    autoPlay={focused}
                                    style={{ height: dpHeight(6), color: '#4992f2' }}
                                />
                                :
                                <View style={styles.iconMian2}>
                                    <Icons
                                        type={IconsType.antDesign}
                                        name={IconsName.bells}
                                        color={color}
                                        size={dpWidth(6)}
                                    />
                                </View>
                        ),
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Account"
                    component={Empty}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            index === 4 ?
                                <LottieView
                                    // progress={animationProgress5.current}
                                    source={require('../../assets/animatedIcons/user.json')}
                                    loop
                                    autoPlay={focused}
                                    style={{ height: dpHeight(4), color: '#4992f2' }}
                                />
                                :
                                <View style={styles.iconMian2}>
                                    <Icons
                                        type={IconsType.antDesign}
                                        name={IconsName.user2}
                                        color={color}
                                        size={dpWidth(6)}
                                    />
                                </View>

                        ),
                        headerShown: false,
                    }}
                />
            </Tab.Navigator>
        </Animated.View>
    )
}
const styles = StyleSheet.create({
    iconMain: {
        height: dpHeight(10),
        width: dpWidth(8),
        backgroundColor: colors.secondPrimary
    },
    iconMian2: {
        height: dpHeight(5),
        width: dpWidth(8),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: dpFont(10)
    }
});