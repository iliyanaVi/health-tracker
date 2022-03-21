import { useReducer } from "react";

import TrackWeightContext from "./track-weight-context";

const defaultTrackWeightState = {
  currentWeight: "",
};
const trackWeightReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTrackWeight = action.currentWeight;
    return {
        currentWeight: updatedTrackWeight,
    };
  }
  if (action.type === "CHANGE") {
    const updatedTrackWeight =  Number(state.currentWeight) !== Number(action.currentWeight);
    return {
      currentWeight: updatedTrackWeight,
    };
  }
   return defaultTrackWeightState;
};

const TrackWeightProvider = (props) => {
  const [trackWeightState, dispatchTrackWeightAction] = useReducer(
    trackWeightReducer,
    defaultTrackWeightState
  );

  const addWeightValue = (currentWeight) => {
    dispatchTrackWeightAction({ type: "ADD", currentWeight: currentWeight });
  };
  const changeWeightValue = (id) => {
    dispatchTrackWeightAction({ type: "DELETE", id: id });
  };

  const trackWeightContext = {
    currentWeight: trackWeightState.currentWeight,
    addWeightValue: addWeightValue,
    changeWeightValue: changeWeightValue,
  };
  return (
    <TrackWeightContext.Provider value={trackWeightContext}>
      {props.children}
    </TrackWeightContext.Provider>
  );
};
export default TrackWeightProvider;
