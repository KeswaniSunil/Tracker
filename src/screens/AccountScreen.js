import React,{useContext} from 'react';
import {View,StyleSheet} from 'react-native';
import {Text,Button} from 'react-native-elements';
import {SafeAreaView} from 'react-navigation';
import {Context as AuthContext} from '../context/AuthContext';
import Spacer from "../components/Spacer";
// import {FontAwesome} from 'react-native-vector-icons';

const AccountScreen=()=>{
    const {signout}=useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{top:"always"}} >
            <Spacer>
                <Button
                    title="Sign Out"
                    onPress={signout}
                />
            </Spacer>
        </SafeAreaView>
    )
};

AccountScreen.navigationOptions={
    title:'Account'
    // tabBarIcon:<FontAwesome name="gear" size={20}/>
};

const styles=StyleSheet.create({
    container:{

    }
});

export default AccountScreen;