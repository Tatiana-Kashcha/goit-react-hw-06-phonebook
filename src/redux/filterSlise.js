const initialState = {
  filter: '',
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'filter/handleCangeFilter':
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};

// export const handleCangeFilter = e => {
//   setFilter(e.target.value.trim());
// };

// export const handleCangeFilter = e => {
//   return {
//     type: 'filter/handleCangeFilter',
//     payload: e,
//   };
// };
// case 'filter/handleCangeFilter':
//       return { ...state, filter: action.payload.target.value.trim()};

export const handleCangeFilter = text => {
  return {
    type: 'filter/handleCangeFilter',
    payload: text,
  };
};
