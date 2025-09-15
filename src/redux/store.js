
import {combineReducers} from 'redux'
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'
import { configureStore } from '@reduxjs/toolkit'

import { persistStore } from 'redux-persist'
import {
  FLUSH, PAUSE,
  PERSIST, PURGE,
  REGISTER, REHYDRATE
} from 'redux-persist';
import { taskReducer } from './Slices/TaskSlice'
import { filterReducer } from './Slices/FilterSlice'

const persistCreate ={
  key: "root",
  storage,

}

const reducers = combineReducers({

  tasks: taskReducer,
  filters: filterReducer,
})

const persistedReduser = persistReducer(persistCreate, reducers)


export const store = configureStore({
reducer: persistedReduser,
middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
})


export const persistor = persistStore(store)


// export const initialState = {
//  tasks: [
//    { id: 0, text: "Learn HTML and CSS", completed: true },
//    { id: 1, text: "Get good at JavaScript", completed: true },
//    { id: 2, text: "Master React", completed: false },
//    { id: 3, text: "Discover Redux", completed: false },
//    { id: 4, text: "Build amazing apps", completed: false },
//  ],
//  filters: {
//    status: "all",
//  },
//  }
// const enhancer = devToolsEnhancer()


// export const store = createStore(rootReducer, enhancer)