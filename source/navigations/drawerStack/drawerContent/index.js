import { DrawerContentScrollView, DrawerItem, useDrawerStatus } from '@react-navigation/drawer';
import { StatusBar, TouchableOpacity, View } from 'react-native';
import { IconsName, IconsType } from '../../../assets/icons';
import { colors } from '../../../assets/colors';
import { styles } from './styles';
import { Dimension } from '../../../assets/dimension';
import Icons from '../../../helpers/IconComponent';
import { useNavigation } from '@react-navigation/native';
import { dpFont } from '../../../assets/sizes';


export const DrawerContent = (props) => {
  const {
    activeScreen
  } = props

  const isDrawerOpen = useDrawerStatus() === 'open';
  let navigation = useNavigation();

  const listSeller = [
    {
      title: 'Home',
      action: () => navigation.navigate('bottomTab'),
      icon: Icons.home,
      type: IconsType.antDesign,
      size: dpFont(25),
      name: 'bottomTab'
    },

    {
      title: 'Profile',
      action: () => null,
      icon: Icons.power,
      type: IconsType.feather,
      size: dpFont(20),
    },
  ];


  return (
    <View style={styles.container}>
      {
        isDrawerOpen ?
          <StatusBar
            backgroundColor={colors.secondPrimary}
            barStyle="light-content"
          />
          :
          null
      }
      <View style={styles.body}>
        <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
          <View style={styles.closeIconMain}>
            <Icons
              type={IconsType.antDesign}
              name={IconsName.close}
              color={colors.white}
              size={Dimension.large3}
            />
          </View>
        </TouchableOpacity>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            {listSeller.map((item, index) => (
              <DrawerItem
                key={index}
                label={item.title}
                labelStyle={activeScreen === item.name ? styles.name2 : styles.name2}
                icon={({ focused, color, size }) =>
                (
                  <View style={activeScreen === item.name ? styles.iconMain : styles.iconMain2}>
                    <Icons
                      type={item.type}
                      name={item.icon}
                      color={colors.white}
                      size={item.size ? item.size : Dimension.large2}
                    />
                  </View>
                )
                }
                onPress={() => {
                  if (item.action != null) {
                    item.action();
                  }
                }}
              />
            ))}
          </View>
        </DrawerContentScrollView>
      </View>
    </View >
  );
};


