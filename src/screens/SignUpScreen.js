import React, { useContext,useEffect } from 'react';
import { View , StyleSheet } from 'react-native';
import {NavigationEvents} from 'react-navigation';
import { Context as AuthContext} from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";


//One thing to notice that this screen will not have any name on header coz we have not added it in second args in App.js ,if we want
//we can write:- 
// loginFlow: createStackNavigator({
//     Signup:SignUpScreen,
//     Signin:SigninScreen
//   },
//   {
//     initialRouteName: 'Signup',
//     defaultNavigationOptions:{
//       title:"Signup"
//     }
//   )

const SignupScreen=()=>{

    const {state,signup,clearErrOnScreenSwicth }=useContext(AuthContext);
    // console.log("errMessage= "+state.errMessage)
    return <View style={styles.container}>
        <NavigationEvents 
            //onWillFocus will be called when we you clicked the item(touchable opacity of Signup Screen) which will navigate to you on this screen or in 
            //other words when you are about to navigate on this screen
            // onWillFocus={()=>{clearErrOnScreenSwicth()}} is same as
            onWillFocus={clearErrOnScreenSwicth}

            //onDidFocus will be called when we have successfully navigated on this screen
            
            //onWillBlur is called whenever we are about to navigate away from the screen (in this case when you press touchable opacity of this Sign in Screen)
            //onDidBlur is called the navigation to go from current screen to any other screen completes
        />
        <AuthForm
            headerText="Sign Up for Tracker"
            errorMessage={state.errMessage}
            submitButtonText="Sign Up"
            // onSubmit={({email,password})=>{signup({email,password})}} or you can provide directly
            //function reference so whatever args provided from AuthFrom to onSubmit() will bve passed to signUp()
            onSubmit={signup}

        />

        {/* One thing to notice here is when you go to main flow then inside that screen you will not get back button on top
        like we get in stack navigator i.e when you go to signin screen from signup bcoz this is functionality in switch navigator
        which can be used in authentication like we are doing coz once signed in or signed up he can't direcly 
        go back to signin or signup page,to go their user should signout first*/}
        {/* <Button
            title="mainFlow"
            onPress={()=>{navigation.navigate('mainFlow');}}
        /> */}
        <NavLink
            text="Already have an account? Sign In instead."
            routeName="Signin"
        />
        
    </View>
};

SignupScreen.navigationOptions = () => {
    return {
      header: () => false,
    };
  };

const styles=StyleSheet.create({
    container:{
        //just to test the amount of space our content is taking:- 
        // borderColor:"red",
        // borderWidth:1,

        //to make this view to take all the space available ,i used flex:1,in css we used flex-grom:1 in zoom clone proj
        //but here flex-grow is not available hence using flex:1
        flex:1,
        // now to bring our all content inside <View> vertically center we will use justify-content:center
        // the reason i used justify-content: center and not align-items:cener is because in react native styling
        // flex direction is by default column so main axis i.e justify content wil be top to bottom where as in css ,
        // flex direction is by default row so their main axis i.e justify content would be left to ri8 hence to bring any
        // content center we should use align-items:center in css,but here will use justify-content
        justifyContent:"center",
        marginBottom:100
    }
});

export default SignupScreen;