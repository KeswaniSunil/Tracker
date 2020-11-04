import React, {useState , useContext} from 'react';
import { View , StyleSheet , TouchableOpacity} from 'react-native';
import {Text , Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import { Context as AuthContext} from "../context/AuthContext";

//We can either use withNavigation hook of react navigation or our custom made navigationRef for accessing
//navigation inside non react component.here i m using withNavigation hook of react navigation  
import {withNavigation} from 'react-navigation'

const NavLink = ({navigation , text , routeName})=>{
    return (
        <TouchableOpacity
            onPress={()=>{navigation.navigate(routeName)}}
        >
            <Text style={styles.link}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles=StyleSheet.create({
    link:{
        margin:10,
        color:"blue",
        fontSize:16
    }
});

export default withNavigation(NavLink);