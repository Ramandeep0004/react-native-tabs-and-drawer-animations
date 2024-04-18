import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "./drawerContent";
import { colors } from "../../assets/colors";
import { Tabs } from "../bottomtabs/bottomtab2";
import { TabsOne } from "../bottomtabs/bottomsTabs";


const Drawer = createDrawerNavigator();

const AppDrawer = () => {
    let activeScreen = ''
    return (
        <Drawer.Navigator
            initialRouteName="bottomTab"
            backBehavior="history"
            screenOptions={({ route, navigation }) => {
                let index = navigation && navigation.getState ? navigation.getState().index : ''
                let currentScreenName = navigation && navigation.getState ? navigation.getState().routeNames[index] : ''
                activeScreen = currentScreenName ? currentScreenName : ''
                return {
                    overlayColor: 'transparent',
                    drawerType: 'slide',
                    drawerStyle: {
                        width: '75%',
                    },
                    drawerStyles: {
                        backgroundColor: colors.secondPrimary
                    },
                    contentContainerStyle: {
                        backgroundColor: colors.secondPrimary
                    },
                    sceneContainerStyle: {
                        backgroundColor: colors.secondPrimary
                    }
                }
            }}
            drawerContent={(props) => <DrawerContent {...props} activeScreen={activeScreen} />}
        >
            <Drawer.Screen
                name="bottomTab"
                component={Tabs}      /*  {Tabs}  {TabsOne}   */
                options={{
                    headerShown: false,
                }}
            />
        </Drawer.Navigator>
    );
};


export default AppDrawer;