export interface userCardSmall {
  id: number;
  userName: string;
  userCardSmallType: userCardSmallType;
}

export interface userCardSmallType {
  brand: userOption;
  beans: userOption;
  coffeeType: userOption;
  bottle: userOption;
  temperature: userOption;
}

export interface userOption {
  id: number;
  name: string;
  image: string;
  type: string;
}
