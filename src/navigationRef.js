//now as we know that only react components have access to the navigation object i.e all the components declared or used inside App.js
//file or simply that are included in <App/> ,in our project all the components under screens folder are react
//component and they have direct access to navgation object but all the other components that are not react component i.e this proj all the components
//inside api,components,context folder.But it might happen that non-react component also wants to access react navigation object so for that purpose
//we have created this navigationRef.js component.

import {NavigationActions} from 'react-navigation';

let navigator;

//clever function/hook to get access to navigator
export const setNavigator=(nav)=>{
    navigator=nav;
};

//nvigate function/hook for everyone else to use
export const navigate=(routeName,params)=>{
    navigator.dispatch(
        // NavigationActions.navigate({
        //     routeName:routeName,
        //     params:params
        // })  is same as:- 
        NavigationActions.navigate({
            routeName,
            params
        })
    );
};



