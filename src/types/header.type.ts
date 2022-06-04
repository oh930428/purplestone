export interface HeaderProps {
  title: string;
  subTitle: string;
  textAlign?: string;
  font: HeaderTextProps;
  subFont: HeaderTextProps;
}

export interface HeaderTextProps {
  fontFamily: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
}
