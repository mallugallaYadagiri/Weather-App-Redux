import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/WeatherReducers";

const middleWare = [thunk];

const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
