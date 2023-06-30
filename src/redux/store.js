import { createStore } from "redux"; 
import rootReducer from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhacers = composeWithDevTools();
 
const store = createStore(rootReducer, composeEnhacers);
export default store;