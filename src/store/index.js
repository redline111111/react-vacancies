import {createStore} from 'redux'
import { rootReducer } from './root-reducer';
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['filters', 'positions'],
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export const persistor = persistStore(store);