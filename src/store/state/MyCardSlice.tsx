import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MyCardTypeProps } from 'types/myCard.types';

const initialState: MyCardTypeProps = {
  id: '',
  type: '',
  name: '',
  description: '',
  image: '',
};

export const myCardSlice = createSlice({
  name: 'coffeeType',
  initialState,
  reducers: {
    setSelectOptions: (state, action: PayloadAction<MyCardTypeProps>) => {
      const { id, type, name, description, image } = action.payload;
      state.id = id;
      state.type = type;
      state.name = name;
      state.description = description;
      state.image = image;
    },
  },
});

export default myCardSlice.reducer;
export const { setSelectOptions } = myCardSlice.actions;
