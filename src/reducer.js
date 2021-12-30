import { combineReducers } from "redux";
const initialState = {
  infoData: {},
};

const setTheValuesInStore = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case "INFO":
      return { ...state, infoData: action.infoData };
      break;
    default:
      return state;
  }
};

export const combine = combineReducers({
  setTheValuesInStore,
});
