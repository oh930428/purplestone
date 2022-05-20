import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MyCardTypeProps } from 'types/myCard.types';

const initialState = {
  type: '',
  selected: {},
};

export const myCardSlice = createSlice({
  name: 'coffeeType',
  initialState,
  reducers: {
    setSelectOptions: (state, action: PayloadAction<any>) => {
      const { type, selected } = action.payload;
      const _type = type || state.type;
      const _selected = selected || state.selected;
      return { ...state, type: _type, selected: _selected };
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
