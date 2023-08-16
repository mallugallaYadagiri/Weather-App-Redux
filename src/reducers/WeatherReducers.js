import { combineReducers } from "redux";

export const weatherReducer = (state = null, action) => {
  switch (action.type) {
    case "FETCH_WEATHER_REQUEST":
      return null;

    case "FETCH_WEATHER_SUCCESS":
      return action.payload;

    case "FETCH_WEATHER_FAILURE":
      return null;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  weather: weatherReducer,
});
export default rootReducer;
