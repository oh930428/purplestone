import styled, { css } from 'styled-components';

interface Props {
  name: string;
}

export const IconSocial = ({ name }: Props) => {
  return (
    <Container name={name}>
      {name === 'facebook' && (
        <img
          className="icon-image"
          src={require('../../assets/Icons/socials/facebook.png')}
          alt={name}
        />
      )}
      {name === 'google' && (
        <img
          className="icon-image"
          src={require('../../assets/Icons/socials/google.png')}
          alt={name}
        />
      )}
      {name === 'instagram' && (
        <img
          className="icon-image"
          src={require('../../assets/Icons/socials/instagram.png')}
          alt={name}
        />
      )}
    </Container>
  );
};

export default IconSocial;

const Container = styled.article<{ name: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  ${props =>
    props.name === 'facebook' &&
    css`
      background-color: #3182ce; ;
    `}
  ${props =>
    props.name === 'google' &&
    css`
      background-color: #e53e3e;
    `}
    ${props =>
    props.name === 'instagram' &&
    css`
      background-color: #2d3748;
    `}
    
  .icon-image {
    height: 18px;
    width: 16px;
  }
`;
