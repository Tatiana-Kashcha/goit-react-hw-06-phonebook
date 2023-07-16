// import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsPersistReducer } from './contactsSlise';
import { filterReducer } from './filterSlise';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// const rootReducer = combineReducers({
//   contactsUser: contactsPersistReducer,
//   filterUser: filterReducer,
// });

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);

export const store = configureStore({
  reducer: {
    contactsUser: contactsPersistReducer,
    filterUser: filterReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
