import styled, { css } from 'styled-components';
import { colors, fonts } from '../../styles';
import { ButtonProps } from '../../types/button.types';

export const Button = ({
  theme,
  size,
  label,
  isRegular = false,
}: ButtonProps) => {
  return (
    <Container type="button" theme={theme} size={size} isRegular={isRegular}>
      {label}
    </Container>
  );
};

const Container = styled.button<{
  theme: string;
  size: string;
  isRegular: boolean;
}>`
  position: relative;
  border-radius: 6px;
  background: 0;
  outline: 0;
  cursor: pointer;
  /* theme */
  ${props =>
    props.theme === 'default' &&
    css`
      ${fonts.Headline4}
      width: 100%;
      height: 60px;
      color: rgb(102, 102, 102);
      border: 1px solid ${colors.Gray_01};
    `}
  ${props =>
    props.theme === 'primary' &&
    css`
      ${fonts.Headline4}
      width: 100%;
      height: 60px;
      color: #666666;
      border: 1px solid ${colors.Gray_01};
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: ${colors.Secondary_02};
        border-radius: 6px;
        transform: translate(10px, 10px);
        transition: transform 0.2s ease;
        z-index: -1;
      }
    `}
    ${props =>
    props.theme === 'disabled' &&
    css`
      ${fonts.Headline4}
      width: 100%;
      height: 60px;
      color: ${colors.White};
      border: none;
      background-color: rgb(215, 219, 226);
      pointer-events: none;
      cursor: not-allowed;
    `}
    ${props =>
    props.theme === 'error' &&
    css`
      width: 100%;
      height: 60px;
      border: none;
      ${fonts.Headline4}
      color: ${colors.White};
      background-color: rgb(233, 104, 127);
    `}
  /* button size */
  ${props =>
    props.size === 'medium' &&
    css`
      ${fonts.Headline4}
      width: 180px;
      height: 60px;
      color: ${colors.Primary_01};
      border: 1px solid ${colors.Gray_01};
    `}
  ${props =>
    props.size === 'large' &&
    css`
      width: 244px;
      height: 85px;
      font-family: 'Noto Sans';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 33px;
      letter-spacing: -0.01em;
      color: #474306;
      border: 1px solid #4f4f4f;
    `} 
  /* font weight */
  ${props =>
    props.isRegular &&
    css`
      font-weight: 400;
      font-family: Poppins;
    `}
    
  &:hover::after {
    transform: translate(0, 0);
  }
`;
