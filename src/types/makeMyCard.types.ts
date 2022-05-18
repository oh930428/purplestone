export interface MakeMyCardProps {
  title: string;
  subTitle: string;
  brand: MyCardContentsProps;
  temperature: MyCardContentsProps;
  beans: MyCardContentsProps;
  coffee: MyCardContentsProps;
  bottle: MyCardContentsProps;
}

export interface MyCardContentsProps {
  text: string;
  type: MyCardTypeProps[];
}

export interface MyCardTypeProps {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
}
