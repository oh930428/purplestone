import styled, { css } from 'styled-components';
import Button from '../Button/Button';

import { colors } from '../../styles';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { desktopMain, mobileMain, tabletMain } from 'styles/mixin';
import { ResponsiveByDeivceProps } from 'types/responsiveByDevice.type';

const Navigation = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1180px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1179px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Container isDesktop={isDesktop}>
      <div className="wrapper">
        <Logo>
          <Link to="/">PurpleStone</Link>
        </Logo>

        {isDesktop && (
          <Gnb>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/all-coffees">All Coffees</Link>
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
        )}

        {!isDesktop && <div>햄버거</div>}
      </div>
    </Container>
  );
};

export default Navigation;

const Container = styled.nav<{ isDesktop: boolean }>`
  position: absolute;
  top: 20px;
  width: 100%;
  padding: 0 2rem;
  z-index: 100;

  ${props =>
    props.isDesktop &&
    css`
      padding: 0;
    `}

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;

    ${props =>
      props.isDesktop &&
      css`
        max-width: 1400px;
      `}
  }

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
