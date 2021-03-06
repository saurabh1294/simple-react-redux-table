import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from '../reducers/rootReducer'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const configureStore = () => {
  let store = createStore(persistedReducer)
  // let store = createStore(rootReducer);
  let persistor = persistStore(store);
  return { store, persistor }
}

export default configureStore;