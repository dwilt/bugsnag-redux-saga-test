import { call, takeEvery } from 'redux-saga/effects'

import bugsnag from './bugsnag';

export default function* mySaga() {
  yield takeEvery('ADD_TODO', function* () {
    bugsnag.notify(new Error("notifying after variable error below fired"));
  // b = y
    yield call(console.log, 'saga ran')
  });
}
