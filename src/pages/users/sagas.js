import {all, put, takeLatest} from 'redux-saga/effects'
import 'isomorphic-unfetch'

function loadDataSuccess(data) {
  return {
    type: 'LOAD_DATA_SUCCESS',
    payload: data,
  };
}

function * loadDataSaga () {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users')
    const data = yield res.json()
    yield put(loadDataSuccess(data))
  } catch (err) {
    // yield put(failure(err))
  }
}

function * rootSaga () {
  yield all([
    takeLatest('LOAD_DATA', loadDataSaga)
  ])
}

export default [rootSaga];
