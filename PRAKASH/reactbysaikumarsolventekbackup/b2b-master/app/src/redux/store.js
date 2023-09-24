import { createStore } from "redux";
import rootReducer from "./reducers/main";
import { composeWithDevTools } from '@redux-devtools/extension';

const appStore = createStore(rootReducer, composeWithDevTools());

export default appStore;
