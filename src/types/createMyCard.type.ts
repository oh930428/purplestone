export interface createMyCard {
  title: string;
  subTitle: string;
  chooseCoffeeOption: ChooseOption[];
  userCard: UserCard;
}

export interface ChooseOption {
  id: string;
  name: string;
  text: string;
  thumbnail: string;
  types: CoffeeType[];
}

export interface UserCard {
  brand: CoffeeType;
  beans: CoffeeType;
  coffeeType: CoffeeType;
  bottle: CoffeeType;
  temperature: CoffeeType;
}

export interface CoffeeType {
  id: number;
  type: string;
  name: string;
  description: string;
  image: string;
}
