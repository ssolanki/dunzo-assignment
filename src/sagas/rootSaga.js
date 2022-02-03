import { all, fork } from "redux-saga/effects"

import test from "./test"

// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([fork(test)])
}
