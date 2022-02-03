import { call, all, takeEvery } from 'redux-saga/effects'

function* testFn() {
    console.log("TEST")
    yield call(() => console.log("TEST SAGA"));
 }

 export default function* root() {
    yield all([
        takeEvery("TEST", testFn),
    ])
}