import styled from 'styled-components';
import Button from '../Button/Button';

import { colors } from '../../styles';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Container>
      <Logo>
        <Link to="/">PurpleStone</Link>
      </Logo>

      <Gnb>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/all-coffes">All Coffes</Link>
        </li>
        <li className="nav-button-item">
          <Link to="/mycard">
            <Button
              size="medium"
              theme="primary"
              label="Create My Card"
              isRegular
            ></Button>
          </Link>
        </li>
      </Gnb>
    </Container>
  );
};

export default Navigation;

const Container = styled.nav`
  position: absolute;
  top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 100px;
  z-index: 100;

  a {
    color: ${colors.Primary_01};
  }
`;

const Logo = styled.h1`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  text-align: left;
  color: ${colors.Primary_01};
`;

const Gnb = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 60px;

  li {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    color: ${colors.Primary_01};

    .nav-button-item {
      font-weight: 400;
    }
  }
`;
