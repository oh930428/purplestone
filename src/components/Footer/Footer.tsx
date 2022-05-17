import styled from 'styled-components';
import { colors, fonts } from 'styles';
import { Link } from 'react-router-dom';
import IconSocial from '../Icon/IconSocial';

const Footer = () => {
  return (
    <Container>
      <Wrapper>
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
  height: 160px;
  padding: 0 80px;
  background-color: ${colors.Primary_01};
`;

const Logo = styled.h1`
  font-family: Noto Sans;
  font-size: 30px;
  font-weight: 700;
  line-height: 41px;
  letter-spacing: -0.05rem;
  margin-top: 26px;

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

  p {
    ${fonts.RegularBody2}
    color: ${colors.White};
  }
`;

const IconBox = styled.div`
  display: flex;
  gap: 7px;
`;
