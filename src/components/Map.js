import React , {useContext} from 'react';
import {View,StyleSheet , ActivityIndicator} from 'react-native';
import MapView,{Polyline , Circle} from 'react-native-maps';
import {Context as LocationContext} from "../context/LocationContext";

const Map=()=>{
    //For dummy map,use:-
    // let points=[];
    // for(let i=0;i<20;i++){
    //     if(i == 2 || i== 6 || i== 12){
    //         points.push({
    //             latitude:37.78825 - i* 0.001,
    //             longitude: -122.4324 + i* 0.001
    //         }); 
    //     }
    //     else{
    //         points.push({
    //             latitude:37.78825 + i* 0.001,
    //             longitude: -122.4324 + i* 0.001
    //         })
    //     }
    // }

    const {state:{currentLocation , location}}=useContext(LocationContext);

    if(!currentLocation){
        return <ActivityIndicator size="large" style={{marginTop:200}}/>;
    }

    return (    
        <View>
            {/*Dummy Map:- 
             <MapView
                style={styles.map}
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            >
                 <Polyline 
                    //  coordinates={points}
                 />
             </MapView> */}

             
            <MapView style={styles.map}
                //to display starting position we use initialRegion
                initialRegion={{
                    ...currentLocation.coords,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
                //to track user around we use region,also whenever region property is updated ,the map will automatically update itself:- 
                // region={{
                //     ...currentLocation.coords,
                //     latitudeDelta: 0.0922,
                //     longitudeDelta: 0.0421,
                // }}

            >
                {/* <Circle
                    center={currentLocation.coords}
                    radius={30}
                    strokeColor="rgba(158,158,255,1.0)"
                    fillColor="rgba(158,158,255,0.3)"
                /> */}
                <Polyline
                    coordinates={location.map(loc=>loc.coords)}
                />
            </MapView>
        </View>
    );
};

const styles=StyleSheet.create({
    map:{
        height:300,
        // width:200,
        borderColor:"red",
        borderWidth:2
    }
});

export default Map;