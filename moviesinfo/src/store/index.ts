import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import filmDetailReducer from "./filmDetail/reducer";

import filmsReducer from "./films/reducer";

const rootReducer = combineReducers({
  filmsReducer,
  filmDetailReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
