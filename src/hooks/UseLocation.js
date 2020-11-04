import {useEffect,useState , useContext} from 'react';
import {Platform} from 'react-native';
import Geolocation  from "react-native-geolocation-service";
import {request,PERMISSIONS} from 'react-native-permissions';


export default (shouldTrackUser,callback)=>{
    const [err,setErr]=useState("");
    let watchId;
    const requestLocationPermission=async ()=>{
        if(Platform.OS==='android'){
            let response=await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
            console.log("Android Response= "+response);
            if(response==='granted'){
                getPosition();
            }
            
        }
        else if(Platform.OS==='ios'){
            let response=await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
            console.log("IOS Response= "+response);
            if(response==='granted'){
                getPosition();
            }
        }
    }

    const getPosition=()=>{
        Geolocation.getCurrentPosition((position)=>{
            console.log("Starting Position= "+JSON.stringify(position));
        },
        (err)=>{
            setErr(err);
            console.warn('ERROR in Starting Position(' + err.code + '): ' + err.message);
        }
        // {showLocationDialog:true}
        )
    }

    //This useEffect hook is not functioning correctly that means even when we start recording,the new location
    //on where the user is not getting addedin locations array of LocationContext.js .To understand why its not 
    //working ,see the 245th and 256th video named Buggy useEffects and Understanding Stale References respectively.
    // useEffect(()=>{
    //     if(shouldTrackUser){
    //         console.log("User Tracking Stopped");
    //         startWatching();
    //     }
    //     else{
    //         console.log("User Tracking Stopped");
    //         Geolocation.clearWatch(subscriber);
    //         setSubscriber(null);
    //     }
    // },[shouldTrackUser]);


    //Hence to solve this,we use useCallback inside TrackCreateScreen and have passed it here and also did some cleanup
    // in the return () in useEffect.To understand how this will solve the prob, see 249th and 250th video namely
    //The useCallback hook and cleaning up After ourselves respectively 
    useEffect(()=>{
        console.log("useEffect Called");
        // let subscriber;    
        const startWatching=async ()=>{
                console.log("Inside start Watching");
                await requestLocationPermission();
                watchId =await Geolocation.watchPosition(
                    callback,
                    (myerr)=>{
                        setErr(myerr);
                        console.warn('ERROR in Next Position(' + myerr.code + '): ' + myerr.message);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 0,
                        distanceFilter:1
                        // showLocationDialog:true
                    }
                );
                console.log("Watch ID ="+watchId);
        };
        if(shouldTrackUser){
            console.log("User Tracking Started");
            startWatching();
            console.log("2 Watch Id="+watchId);
        }
        else{
            console.log("User Tracking Stopped");            
            if(watchId){
                console.log("Stopped for subscriber/watchId= "+watchId);                
                Geolocation.clearWatch(watchId);
                watchId=null;
            }
        }
        return ()=>{
            console.log("Use Effect Returned");
            // if(watchId){
                Geolocation.clearWatch(watchId);                
            // }
        }
    },[shouldTrackUser,callback]);
    // console.log("After useEffect,watchId= "+watchId);
    return [err];
}