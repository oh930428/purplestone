import { CoffeeType } from '../../types/createMyCard.type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { coffeeDefaultOption } from 'properties/coffeDefaultOption';

export const myCardSlice = createSlice({
  name: 'coffeeOption',
  initialState: coffeeDefaultOption,
  reducers: {
    setSelectOptions: (state, action: PayloadAction<CoffeeType>) => {
      const updated = { ...state };
      updated[action.payload.type] = action.payload;
      return updated;
    },
  },
});

export default myCardSlice.reducer;
export const { setSelectOptions } = myCardSlice.actions;
