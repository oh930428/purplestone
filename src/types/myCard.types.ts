export interface MyCardProps {
  title: string;
  subTitle: string;
  coffeeOption: CoffeeOptionProps[];
  makeMyCardOption: MyCardTypeProps;
}

export interface CoffeeOptionProps {
  name: string;
  text: string;
  thumbnail: string;
  types: MyCardTypeProps[];
}

export interface MyCardTypeProps {
  id: string;
  type: string;
  name: string;
  description: string;
  image: string;
}
