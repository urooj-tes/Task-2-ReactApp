import { createStore, applyMiddleware, compose } from "redux";
import { combine } from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combine, composeEnhancers(applyMiddleware(thunk)));
export default store;
