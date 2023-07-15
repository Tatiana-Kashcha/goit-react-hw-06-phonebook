import { createStore, combineReducers } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsPersistReducer } from './contactsSlise';
import { filterReducer } from './filterSlise';
import { persistStore } from 'redux-persist';

const rootReducer = combineReducers({
  contactsUser: contactsPersistReducer,
  filterUser: filterReducer,
});

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store);
