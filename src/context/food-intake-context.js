import React from "react";

const workoutsContext = React.createContext({
    foodInformation:[],
    addFood: (food)=>{},
    deletefood: (id)=>{}
});
export default workoutsContext;