/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);




//Demo of What each lines means in index.js :-
//import a library to help create a component
// import React from 'react';
// // import ReactNative,{Text} from 'react-native';
// import {Text,AppRegistry} from 'react-native';

// //create a component
// const App=()=>{
//     return (
//         <Text>Some Text</Text>
//     );
// }


// //Registering the component to Render it to device:- 
// import {name as appName} from './app.json';

// // ReactNative.AppRegistry.registerComponent(appName,()=>App);
// AppRegistry.registerComponent(appName,()=>App);
