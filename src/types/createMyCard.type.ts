export interface CreateMyCard {
  title: string;
  subTitle: string;
  coffeeOptions: CoffeeOption[];
  userCard: UserCard;
}

export interface CoffeeOption {
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
