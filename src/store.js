import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"; // You can use other lib as well
import rootReducer from "./reducers/rootReducer";
export default function configureStore(initialState = {}) {
	return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
