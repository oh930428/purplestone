export interface ButtonProps {
  theme: string;
  size: string;
  label: string;
  isRegular?: boolean;
  onPress?: () => void;
  onClick?: () => void;
}
