import React,{ useState , useContext , useCallback} from 'react';
import {StyleSheet } from 'react-native';
import {Text} from 'react-native-elements';

//Now to detect when usr comes and leaves this TrackCreate Screen we can either use onWillBlur or such events using
//NavigationEvents or we can do so using withNavigationFocus .So in this,we will use withNavigationFocus
import {SafeAreaView , withNavigationFocus} from 'react-navigation';
import Map from "../components/Map";
import {Context as LocationContext} from "../context/LocationContext";
import useLocation from "../hooks/UseLocation";
import TrackForm from "../components/TrackForm";
// import { FontAwesome } from 'react-native-vector-icons';


//Now withNavigationFocus gives us on prop isFocused,so to use it:- 
const TrackCreateScreen=({isFocused})=>{

    const {state , addLocation}=useContext(LocationContext);
    console.log("TrackCreateScreen focused= "+isFocused);
    const successCB=useCallback((position)=>{
        let counter=Math.floor(Math.random() * 30);
        //to get real data:- 
        addLocation(position , state.recording);
        console.log("Next Position= "+JSON.stringify(position));
        // Geolocation.clearWatch(id);

        console.log("Success CB, counter= "+counter);

        // to get Dummy data:-
        //Also make sure that latitude and longitude is according to your current location
        // let customPosition= {
        //     timestamp : 10000000 , 
        //     coords:{
        //         speed:0,
        //         heading:0,
        //         accuracy:5,
        //         altitudeAccuracy:5,
        //         altitude:5,
        //         longitude: 73.2235338 + counter * 0.0001,
        //         latitude:22.3094864 + counter * 0.0001
        //     }
        // }
        console.log("Now,counter= "+counter+" this="+this);
        // addLocation(customPosition,state.recording);
        console.log("Next Position= "+JSON.stringify(position));
        // Geolocation.clearWatch(id);
    }, [state.recording]);

    const [err]=useLocation(isFocused,successCB);

    return (
        <SafeAreaView forceInset={{top:"always"}} >
            <Map/>
            {err ? <Text>Please Enable Location Services</Text> : null}
            <TrackForm/>
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions={
    title:'Create Track'
    // tabBarIcon:<FontAwesome name="plus" size={20}/>
};

const styles=StyleSheet.create({

});

export default withNavigationFocus(TrackCreateScreen);