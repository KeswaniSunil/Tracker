import React, {useState , useContext} from 'react';
import { View , StyleSheet , TouchableOpacity} from 'react-native';
import {Text , Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {NavigationEvents} from 'react-navigation';


const AuthForm = ({headerText , errorMessage , onSubmit , submitButtonText})=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    return (
        <>  
            <NavigationEvents
                onDidBlur={()=>{
                    setEmail("");
                    setPassword("");
                }}
            />
            <Spacer>
                <Text h3 style={styles.header}>{headerText}</Text>
            </Spacer>
            <View style={styles.inputs}>
                <Input 
                    label="Email"
                    value={email}
                    // onChangeText={(newEmail)=>{setEmail(newEmail)}} is same as:-
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Spacer/>
                <Input 
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry
                />
            </View>
            <Spacer>
                <Button
                    title={submitButtonText}
                    onPress={()=>{
                        // console.log("Email1= "+email);
                        // console.log("Password1= "+password);
                        onSubmit({email,password})}}
                />
            </Spacer>
            {errorMessage ?<Text style={styles.errorMessage}>{errorMessage}</Text> : null}
        </>
    )
};

const styles=StyleSheet.create({
    header:{
        margin:20
    },
    inputs:{
        margin:5
    },
    errorMessage:{
        // fontSize:18,
        color:"red"
        // marginHorizontal:15,
        // marginVertical:5
    }
});

export default AuthForm;