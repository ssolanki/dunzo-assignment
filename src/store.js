import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from 'redux-saga'
// import thunk from "redux-thunk"; 
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware()

function configureStore(initialState = {}) {
	const middlewares = [sagaMiddleware]
	// enable this line if you want redux thunk

	// const middlewares = [sagaMiddleware]
	const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middlewares)));
	sagaMiddleware.run(rootSaga)
	return store
}

const store = configureStore()

export default store
