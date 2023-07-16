import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addUser: {
      reducer(state, action) {
        state.contacts.push(action.payload);
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
    deleteUser(state, action) {
      // const index = state.findIndex(user => user.id === action.payload);
      // state.splice(index, 1);
      state.contacts.filter(el => el.id !== action.payload);
    },
  },
});

//     case 'contacts/deleteUser':
//       return {
//         ...state,
//         contacts: state.contacts.filter(el => el.id !== action.payload),
//       };
//     default:
//       return state;
//   }
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
