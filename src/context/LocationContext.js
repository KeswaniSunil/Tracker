import createDataContext from "./createDataContext";


const locationReducer = (state , action)=>{
    switch(action.type){
        case 'add_currLocation':
            return {...state,currentLocation:action.payload};
        case 'start_recording':
            return {...state,recording:true};
        case 'stop_recording':
            return {...state,recording:false};
        case 'add_location':
            //now we coud have used push operation for locations but as we don't want to modify/mutate state values
            //i did this [...state.locations,action.payload] so this means new locations state will be created with all the add value and new one.
            //So hence we didn't modified old locations variable.
            return {...state,location:[...state.location,action.payload]};
        case 'change_name':
            return {...state,name:action.payload};
        case "reset":
            return {...state,name:'',location:[]};
        case "setWatch":
            return {...state,watchid:action.payload};
        default:
            return state;
    }
};

const changeName=dispatch=>(name)=>{
    dispatch({type:"change_name",payload:name})
}
const startRecording=dispatch =>()=>{
    dispatch({type:"start_recording"})
};
const stopRecording=dispatch =>()=>{
    dispatch({type:"stop_recording"})
};
const addLocation=dispatch =>(position,recording)=>{
    dispatch({type:"add_currLocation",payload:position});
    if(recording){
        dispatch({type:"add_location",payload:position});
    }
};
const setWatchId=dispatch=>(id)=>{
    console.log("id received= "+id);
    dispatch({type:"setWatch",payload:id});
}
const reset=dispatch=>()=>{
    dispatch({type:"reset"});
};
export const {Context,Provider} = createDataContext(
    locationReducer,
    {startRecording , stopRecording , addLocation,changeName , reset , setWatchId},
    //state objects and theor default value:-
    {
        name:"",
        recording:false, 
        location:[],
        currentLocation:null,
        watchid:-1
    }
)