import styled from 'styled-components';
import { colors, fonts } from 'styles';
import { Link } from 'react-router-dom';
import IconSocial from '../Icon/IconSocial';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
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

const Container = styled.footer`
  width: 100%;
  height: 16rem;
  background-color: ${colors.Primary_01};
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;

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
