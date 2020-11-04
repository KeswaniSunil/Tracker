import React,{useContext} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {Context as TrackContext} from "../context/TrackContext";
import MapView,{Polyline } from 'react-native-maps';

const TrackDetailScreen=({navigation})=>{
    const { state }=useContext(TrackContext);
    const id=navigation.getParam("id");
    const track=state.find(t => t._id===id);
    console.log("Track= "+track);
    const initialCoords=track.location[0].coords;
    console.log("InitialCoords= "+initialCoords);
    //Now to show map we could have use Map.js ,but it contains much extra code doesnt require here which makes it non-reusable
    //so we are instead using MapView directly
    return <>
        <Text style={{fontSize:40}}>{track.name}</Text>
        <MapView
            style={styles.map}
            initialRegion={{
                longitudeDelta:0.01,
                latitudeDelta:0.01,
                ...initialCoords
            }}
        >
            <Polyline
                coordinates={track.location.map(loc=>loc.coords)}
            />
        </MapView>
    </>
};

TrackDetailScreen.navigationOptions={
    title:'Track Detail',
};

const styles=StyleSheet.create({
    map:{
        height:300,
        // width:200
    }
});

export default TrackDetailScreen;