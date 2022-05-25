export interface userCardProps {
  id: number;
  userName: string;
  userCardSmallType: userCardSmallTypeProps;
}

export interface userCardSmallTypeProps {
  brand: userCardSmallOptionProps;
  beans: userCardSmallOptionProps;
  coffeeType: userCardSmallOptionProps;
  bottle: userCardSmallOptionProps;
  temperature: userCardSmallOptionProps;
}

export interface userCardSmallOptionProps {
  id: number;
  name: string;
  image: string;
  type: string;
}
