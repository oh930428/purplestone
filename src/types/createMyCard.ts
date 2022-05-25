export interface createMyCard {
  title: string;
  subTitle: string;
  chooseCoffeeOption: ChooseCoffeeOptionProps[];
  userCard: UserCardProps;
}

export interface ChooseCoffeeOptionProps {
  id: string;
  name: string;
  text: string;
  thumbnail: string;
  types: CoffeeTypeProps[];
}

export interface UserCardProps {
  brand: CoffeeTypeProps;
  beans: CoffeeTypeProps;
  coffeeType: CoffeeTypeProps;
  bottle: CoffeeTypeProps;
  temperature: CoffeeTypeProps;
}

export interface CoffeeTypeProps {
  id: number;
  type: string;
  name: string;
  description: string;
  image: string;
}
