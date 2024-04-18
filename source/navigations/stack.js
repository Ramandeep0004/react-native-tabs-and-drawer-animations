import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Platform } from 'react-native'
import DrawerStack from './drawerStack/drawer'


let Stack = createNativeStackNavigator()

export const StackScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="drawer"
      headerMode="screen"
      screenOptions={({ route, navigation }) => ({
        presentation: Platform.OS === 'android' ? 'modal' : null,
      })}
    >
      <Stack.Screen
        name="drawer"
        component={DrawerStack}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}
