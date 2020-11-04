import createDataContext from "./createDataContext";
import TrackerApi from "../api/Tracker";
import {AsyncStorage} from 'react-native';
import {navigate} from "../navigationRef";
const authReducer= (state,action)=>{
     switch(action.type){
        case 'error':
            //now this state variable includes :- state={ token:null,errorMessage:''}
            // and what '{...state,errorMessage:action.payload}' this means is:- { token:null,errorMessage:'',errorMessage:action.payload}
            // where action.payload is 'Something Went Wrong with Sign Up' and so new errMessage will override old errMessage so it will become
            // return {token:null,errorMessage:"Something Went Wrong with Sign Up"} and as this return value will become our new state so 
            //after return state ={token:null,errorMessage:"Something Went Wrong with Sign Up"}
            return {...state,errMessage:action.payload};
        case 'signUp/In':
            // return {...state,token:action.payload , errMessage:""}; is same as
            return {token:action.payload , errMessage:""};
        case "clearErrMessage":
            return {...state,errMessage:""}
        case "signout":
            return {token:null,errMessage:""}
        default:
            return state;
     }
};

const tryLocalSignIn=dispatch=> async ()=>{
    const token=await AsyncStorage.getItem("token");
    if(token){
        dispatch({type:'signUp/In',payload:token});
        // console.log("Inside 1");
        navigate('TrackList')
    }
    else{
        //No need to write else condition but still to be on safe side:-
        // console.log("Inside 2");
        navigate("loginFlow"); 
        //Or you can also do:- navigate("Signup")
    }
};

const clearErrOnScreenSwicth=dispatch=>()=>{
    dispatch({type:"clearErrMessage"});
}

//we will have following action functions in this AuthContext :- //#endregion

// const signup=(dispatch)=>{
//     return async ({email,password})=>{
//         try {
//             // const response=await TrackerApi.post('/signup',{email:email,password:password}); is same as
//             const response=await TrackerApi.post('/signup',{email,password});
//             await AsyncStorage.setItem("token",response.data.token);
//             dispatch({type:'signup',payload:response.data.token});
//         } catch (error) {
            
//         }
//     };
// } is same as:- 
const signup=(dispatch)=> async ({email,password})=>{
        try {
            // const response=await TrackerApi.post('/signup',{email:email,password:password}); is same as
            // console.log("Email= "+email);
            // console.log("Password= "+password);
            const response=await TrackerApi.post('/signup',{email,password});
            console.log("Response= "+response.data);
            await AsyncStorage.setItem("token",response.data.token);
            dispatch({type:'signUp/In',payload:response.data.token});
            navigate('TrackList')
        } catch (error) {
            // console.log("Err= "+error);
            dispatch({type:'error',payload:"Something Went Wrong with Sign Up"});
        }
    };


const signin=(dispatch)=> async ({email,password})=>{
    try {
        // const response=await TrackerApi.post('/signup',{email:email,password:password}); is same as
        const response=await TrackerApi.post('/signin',{email,password});
        await AsyncStorage.setItem("token",response.data.token);
        dispatch({type:'signUp/In',payload:response.data.token});
        navigate('TrackList')
    } catch (error) {
        dispatch({type:'error',payload:"Something Went Wrong with Sign In"});
    }
};

const signout=(dispatch)=>async ()=>{
    await AsyncStorage.removeItem("token");
    dispatch({type:"signout"});
    navigate('loginFlow');
};



export const {Context , Provider}=createDataContext(
    authReducer,
    //exporting all the methods used:-
    {signup,signin,signout,clearErrOnScreenSwicth,tryLocalSignIn},
    //state objects and theor default value:-
    {token:null , errMessage: ''}
); 