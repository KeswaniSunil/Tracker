import createDataContext from "./createDataContext";
import TrackerApi from "../api/Tracker";

const trackReducer = (state , action)=>{
    switch(action.type){
        case "fetch":
            return action.payload
        default:
            return state;
    }
};

const fetchTracks=dispatch=>async ()=>{
    const response=await TrackerApi.get('/tracks');    
    dispatch({type:"fetch",payload:response.data}) 
}
const createTracks=dispatch=>async (name,location)=>{
    await TrackerApi.post("/tracks",{name,location});
}
export const {Context,Provider} = createDataContext(
    trackReducer,
    {fetchTracks , createTracks},
    //state objects and their default value.As in this we are only return ony value so no need to provide it in here
    {
        // state:[]
    }
)