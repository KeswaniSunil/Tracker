//The reason why i named this file with underscore is bcoz it shouldn't be pushed in production .This file is just 
//used while development and hence for easy filtering that which files to include in prod and which not, i named
//this file startung with underscore.L0

import RNLocation from 'react-native-location';

const tenMetersWithDegrees = 0.0001;

//faking the Users location just in Dev mode,not in Prod
const getLocation = increment =>{
    return{
        timestamp : 10000000 , 
        coords:{
            speed:0,
            heading:0,
            accuracy:5,
            altitudeAccuracy:5,
            altitude:5,
            longitude: -122.0312186 + increment * tenMetersWithDegrees,
            latitude:37.33233141 + increment * tenMetersWithDegrees
        }
    }
};

let counter=0;
setInterval(()=>{
    
},1000)