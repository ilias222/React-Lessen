import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import { profileReducer } from './profile/reducer'
import { messagesReducer } from './messages/reducer'
import { gallireyReducer } from './gallirey/reducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: 'root',
  storage
}

const rootReducer = combineReducers({
  profile: profileReducer,
  messages: messagesReducer,
  gallirey: gallireyReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// Танк
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))

export const persistor = persistStore(store)
