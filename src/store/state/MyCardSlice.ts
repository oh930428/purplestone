import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { coffeeDefaultOption } from 'properties/coffeDefaultOption';
import { CoffeeTypeProps } from '../../types/createMyCard';

export const myCardSlice = createSlice({
  name: 'coffeeOption',
  initialState: coffeeDefaultOption,
  reducers: {
    setSelectOptions: (state, action: PayloadAction<CoffeeTypeProps>) => {
      const updated = { ...state };
      updated[action.payload.type] = action.payload;
      return updated;
    },
  },
});

export default myCardSlice.reducer;
export const { setSelectOptions } = myCardSlice.actions;
