import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  // selected: localStorage.getItem('cardOptionItem')
  //   ? JSON.parse(localStorage.getItem('cardOptionItem'))
  //   : {},
};

export const myCardSlice = createSlice({
  name: 'coffeeType',
  initialState,
  reducers: {
    setSelectOptions: (state, action: PayloadAction<any>) => {
      const updated = { ...state };
      updated[action.payload.type] = action.payload;
      // localStorage.setItem('cardOptionItem', JSON.stringify(state.selected));
      return updated;
    },
  },
});

// interface Option {
//   id: [],
//   type: [],
//   name: [],
//   description: [],
//   image: [],
// }

// export const myCardAddSlice = createSlice({
//   name: 'coffeeType',
//   initialState: [] as Option[],
//   reducers: {
//     addCard: (state, action: PayloadAction<any>) => {
//       state.push(action.payload);
//     },
//   },
// });

export default myCardSlice.reducer;
export const { setSelectOptions } = myCardSlice.actions;
