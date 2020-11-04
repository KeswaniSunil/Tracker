import axios from 'axios';
import {AsyncStorage} from 'react-native';

const instance= axios.create({
    baseURL:"http://5013a0fcad4a.ngrok.io"
});

//to run the function before any request is made :-
instance.interceptors.request.use(
    //This has two functions inside it.First will be called automatically anytime we are about to make req.
    //Second function will be called automatically anytime their is an error with us making that req.Not neccessarily
    // error in response but if their is some error making that req like no internet connection or something like that
    async (config)=>{
        //config has info such has info abt url we are requesting to,any header attached,etc.
        //So inside here we will modify the config object to include token in header.
        const token=await AsyncStorage.getItem("token");
        if(token){
            config.headers.Authorization=`Bearer ${token}`;
        }
        return config;
    },
    (err)=>{
        return Promise.reject(err);
    }
)

export default instance;