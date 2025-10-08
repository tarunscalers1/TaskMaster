import { takeEvery, put, call } from 'redux-saga/effects';
import { fetchTasksThunk } from '../slices/taskSlice';
import { fetchTasks } from '../../services/api';

function* fetchTasksSaga() {
  try {
    const data = yield call(fetchTasks);
    yield put({ type: 'tasks/fetchTasks/fulfilled', payload: data });
  } catch (error) {
    yield put({ type: 'tasks/fetchTasks/rejected' });
  }
}

export default function* rootSaga() {
  yield takeEvery(fetchTasksThunk.typePrefix, fetchTasksSaga);
}