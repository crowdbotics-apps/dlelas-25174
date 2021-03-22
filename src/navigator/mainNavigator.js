import React from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native"

import SplashScreen from "../features/SplashScreen"
import SideMenu from "./sideMenu"
//@BlueprintImportInsertion
import Maps217024Navigator from '../features/Maps217024/navigator';
import Additem217023Navigator from '../features/Additem217023/navigator';
import Maps217019Navigator from '../features/Maps217019/navigator';
import UserProfile217015Navigator from '../features/UserProfile217015/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  //@BlueprintNavigationInsertion
Maps217024: { screen: Maps217024Navigator },
Additem217023: { screen: Additem217023Navigator },
Maps217019: { screen: Maps217019Navigator },
UserProfile217015: { screen: UserProfile217015Navigator },

  /** new navigators can be added here */
  SplashScreen: {
    screen: SplashScreen
  }
}

const Drawer = createDrawerNavigator()

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <SideMenu {...props} />}>
        {Object.keys(AppNavigator).map(s => (
          <Drawer.Screen name={s} component={AppNavigator[s].screen} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer
