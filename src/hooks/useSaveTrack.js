import {useEffect,useState , useContext} from 'react';
import {Context as LocationContext} from "../context/LocationContext";
import {Context as TrackContext} from "../context/TrackContext";
import { navigate } from "../navigationRef";

//This hooks is used to get info from LocationContext and feed it in TrackContext

export default ()=>{
    const { createTracks }=useContext(TrackContext);
    const {state:{location,name} , reset}=useContext(LocationContext);

    const saveTrack =async ()=>{
        console.log("Saving Track= "+location);
        await createTracks(name,location);
        reset();
        navigate("TrackList");
    }

    //The array we are returning from here is only for community convention.Convention is to form a hook and 
    //return aarray that has some number of values inside of it.In our case we don't have to return an array like
    // [saveTrack] , we could just return the function by itself :- return saveTrack    or function inside an object like:-
    // return {saveTrack} , anything is allowed.But again if we are sticking with community convention,we will return that
    //value inside of array 
    return [saveTrack];
}