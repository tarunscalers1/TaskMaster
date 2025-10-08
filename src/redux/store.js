import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import taskReducer from './slices/taskSlice';
import rootSaga from './sagas/taskSaga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: { tasks: taskReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;