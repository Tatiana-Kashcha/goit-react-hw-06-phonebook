import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   filter: '',
// };

// export const filterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'filter/handleCangeFilter':
//       return { ...state, filter: action.payload };

//     default:
//       return state;
//   }
// };

// export const handleCangeFilter = text => {
//   return {
//     type: 'filter/handleCangeFilter',
//     payload: text,
//   };
// };
export const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    handleCangeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { handleCangeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
