import styled, { css } from 'styled-components';
import { colors, fonts } from 'styles';
import { Link } from 'react-router-dom';
import IconSocial from '../Icon/IconSocial';
import { useMediaQuery } from 'react-responsive';

const Footer = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 960px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Container isDesktop={isDesktop} isMobile={isMobile}>
      <Wrapper isDesktop={isDesktop} isMobile={isMobile}>
        <TextBox>
          <Logo>
            <Link to="/">PurpleStone</Link>
          </Logo>

          <p>
            대표: 내이름. 서울특별시 중구 한강대로 416, 서울스퀘어 15층 101호
            <br />
            <br />
            Copyright by (주)카페인. All right reserved.
            <br />
            이용약관 개인정보처리방침
          </p>
        </TextBox>

        <IconBox>
          <IconSocial name="facebook"></IconSocial>
          <IconSocial name="google"></IconSocial>
          <IconSocial name="instagram"></IconSocial>
        </IconBox>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const Container = styled.footer<{ isDesktop: boolean; isMobile: boolean }>`
  width: 100%;
  padding: 2rem;
  background-color: ${colors.Primary_01};

  ${props =>
    props.isDesktop &&
    css`
      padding: 1rem 0 3rem;
    `}
`;

const Logo = styled.h1`
  margin-top: 2.6rem;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 4.1rem;
  letter-spacing: -0.15rem;

  a {
    color: ${colors.White};
  }
`;

const Wrapper = styled.div<{ isDesktop: boolean; isMobile: boolean }>`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  ${props =>
    props.isDesktop &&
    css`
      max-width: 1400px;
    `}

  ${props =>
    props.isMobile &&
    css`
      flex-direction: column;
    `}

  p {
    ${fonts.RegularBody2}
    color: ${colors.White};
  }
`;

const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: inherit;
  gap: 7rem;
`;

const IconBox = styled.div`
  display: flex;
  gap: 0.7rem;
`;
