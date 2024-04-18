import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Drawer from './source/navigations/drawerStack/drawer';


function App() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}


export default App;
