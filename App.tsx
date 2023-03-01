import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React,{useContext, useEffect} from 'react';
import { UserContext } from './AppScreens/UserProvider';
import {
  SafeAreaView
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from "./AppScreens/Home";
import Profile from "./AppScreens/Profile";
import Sharing from "./AppScreens/Sharing";
import WebviewApp from "./AppScreens/WebviewApp";
import CodeScanner from './AppScreens/CodeScanner';
import UserProvider from "./AppScreens/UserProvider";
import { ThemeStyles } from './AppScreens/Css/ThemeStyles';
import appconfigs from './appconfigs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  const userInfo = useContext(UserContext);
  return (
      <Tab.Navigator screenOptions={({ route }) =>
      ({
        //tabBarActiveBackgroundColor:"red",
        headerTitleStyle:ThemeStyles.headerTitleStyle,
        headerStyle:ThemeStyles.headerStyle,
        tabBarItemStyle:ThemeStyles.tabarItemStyle,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string = "";

          switch (route.name) {
            case 'Home':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            case 'Sharing':
              iconName = focused ? 'share-social' : 'share-social-outline';
              break;
            case 'WebviewApp':
              iconName = focused ? 'book' : 'book-outline';
              break;
            case 'CodeScanner':
              iconName = focused ? 'qr-code' : 'qr-code-outline';
              break;
            default:
              iconName = focused ? 'list' : 'list-outline';
              break;
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={ThemeStyles.tabIconColor.color} />;
        }
      })
      }>

        <Tab.Screen name="Home" options={{ headerShown: false,tabBarLabelStyle:{color:ThemeStyles.themeBackgroundTextColor.color} }} component={Home}  />
        <Tab.Screen name="Profile" options={{ tabBarLabelStyle:{color:ThemeStyles.themeBackgroundTextColor.color} }} component={Profile} listeners={
            ({ navigation, route }) => ({
              tabPress: (e) => {
                e.preventDefault();
                console.log('profile in nav');
                navigation.navigate("Profile", { req:'fromNavTab' });
              }
            })
          }/>
        <Tab.Screen name="WebviewApp" options={{ headerShown: false,tabBarLabel:"Catalog", tabBarLabelStyle:{color:ThemeStyles.themeBackgroundTextColor.color} }} component={WebviewApp}
          listeners={
            ({ navigation, route }) => ({
              tabPress: (e) => {
                e.preventDefault();
                console.log('webappUrl in nav',userInfo.webappUrl);
                navigation.navigate("WebviewApp", { url: userInfo.webappUrl });
              }
            })
          } />
        <Tab.Screen name="Sharing" component={Sharing} options={{ tabBarLabel:"Share", tabBarLabelStyle:{color:ThemeStyles.themeBackgroundTextColor.color} }}
        listeners={
            ({ navigation, route }) => ({
              tabPress: (e) => {
                e.preventDefault();
                navigation.navigate("Sharing", { url: appconfigs.appDownloadUrl});
              }
            })
          }/>
        <Tab.Screen name="CodeScanner" options={{tabBarLabel:"Code Scan",tabBarLabelStyle:{color:ThemeStyles.themeBackgroundTextColor.color}}} component={CodeScanner} />
      </Tab.Navigator>
  );
}

const App = () => {
  useEffect(()=>{
    console.log('application started')
  },
  []);
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  return (
    <SafeAreaView style={ThemeStyles.safeArea}>
      <NavigationContainer>
        <UserProvider>
        <MyTabs></MyTabs>
        </UserProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
