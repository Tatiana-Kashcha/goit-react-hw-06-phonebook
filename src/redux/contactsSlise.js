import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const initialState = {
//   contacts: [],
// };

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addUser: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(data) {
        return {
          payload: {
            id: nanoid(),
            ...data,
          },
        };
      },
    },
  },
});

// export const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addUser':
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };

//     case 'contacts/deleteUser':
//       return {
//         ...state,
//         contacts: state.contacts.filter(el => el.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };

// export const addUser = data => {
//   return {
//     type: 'contacts/addUser',
//     payload: {
//       id: nanoid(),
//       ...data,
//     },
//   };
// };

// export const deleteUser = id => {
//   return {
//     type: 'contacts/deleteUser',
//     payload: id,
//   };
// };

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsPersistReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addUser, deleteUser } = contactsSlice.actions;

// export const contactsPersistReducer = persistReducer(
//   persistConfig,
//   contactsReducer
// );
