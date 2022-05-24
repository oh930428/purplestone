import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserCardProps, CoffeeTypeProps } from './../../types/myCard.types';

const userMyCard: UserCardProps = {
  brand: {
    id: 1,
    name: 'EDIYA COFFEE',
    description: '이디아 브랜드가 좋아요',
    image: 'brands/ediya.png',
    type: 'brand',
  },
  beans: {
    id: 2,
    name: '콜롬비아 수프리모',
    description: '적절한 산미가 깔끔한 맛의 콜롬비아 수프리모가 내 취향~',
    image: 'beans/colombiaSupremo.png',
    type: 'beans',
  },
  coffeeType: {
    id: 3,
    name: '아메리카노',
    description: '내 마음에 아메리카노',
    image: 'coffeetypes/americano.png',
    type: 'coffeeType',
  },
  bottle: {
    id: 4,
    name: '텀블러',
    description: '텀블러',
    image: 'bottles/cup-tumbler.png',
    type: 'bottle',
  },
  temperature: {
    id: 5,
    name: '쪄.죽.따',
    description: '이열치열! 여름에도 뜨거운 커피 못 잃어',
    image: 'temperature/hot.png',
    type: 'temperature',
  },
};

export const myCardSlice = createSlice({
  name: 'coffeeOption',
  initialState: userMyCard,
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
