import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import {setNavigator} from "./src/navigationRef";
import {Provider as AuthProvider} from "./src/context/AuthContext"; 
import {Provider as LocationProvider} from "./src/context/LocationContext";
import {Provider as TrackProvider} from "./src/context/TrackContext";  
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import AccountScreen from "./src/screens/AccountScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SigninScreen from "./src/screens/SigninScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
// import {FontAwesome} from 'react-native-vector-icons';

const trackListFlow=createStackNavigator({
  TrackList:TrackListScreen,
  TrackDetail:TrackDetailScreen
});

trackListFlow.navigationOptions={
  title:'Tracks'
  // tabBarIcon:<FontAwesome name="th-list" size={20}/>
};

const switchNavigator=createSwitchNavigator({
  ResolveAuth:ResolveAuthScreen,
  loginFlow: createStackNavigator({
    Signup:SignUpScreen,
    Signin:SigninScreen
  }) ,
  mainFlow:createBottomTabNavigator({
    // trackListFlow:trackListFlow, is same as
    trackListFlow,
    TrackCreate:TrackCreateScreen,
    Account:AccountScreen,

  })
});

const App=createAppContainer(switchNavigator)
const Auth = ()=>{
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator)=>{setNavigator(navigator)}}/>
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  ) 
};
export default Auth;