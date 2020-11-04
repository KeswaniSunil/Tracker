import React , {useContext} from 'react';
import {View,StyleSheet } from 'react-native';
import { Button, Input} from 'react-native-elements';
import {Context as LocationContext} from "../context/LocationContext";
import Spacer from "../components/Spacer";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm=()=>{

    const {state :{ name,recording , location} , changeName,startRecording,stopRecording} = useContext(LocationContext);

    const [saveTrack]=useSaveTrack();
    return <View style={styles.container}>
        <Spacer>
            <Input 
                value={name}
                // onChangeText={()=>{
                //     changeName(name);
                // }}  OR
                onChangeText={changeName}
                placeholder="Enter Track Name"
            />
        </Spacer>
        <Spacer>
            {recording ? 
                <Button
                    title="Stop"
                    onPress={stopRecording}
                />
                :
                <Button
                    title="Start Recording"
                    onPress={startRecording}
                />
            }
        </Spacer>
        <Spacer>
            {!recording && location.length
                ?
                <Button
                    title="Save Recording"
                    onPress={saveTrack}
                />
                :
                null
            }
        </Spacer>
    </View>
};

const styles=StyleSheet.create({

    container:{
        marginTop:20,
        marginHorizontal:10
    }

});

export default TrackForm;