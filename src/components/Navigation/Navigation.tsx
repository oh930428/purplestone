import styled, { css, keyframes } from 'styled-components';
import Button from '../Button/Button';

import { useState, useEffect } from 'react';
import { colors } from '../../styles';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Navigation = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [slideEffect, setSlideEffect] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 1180px)' });

  useEffect(() => {
    if (mobileMenu) {
      setSlideEffect(true);
      document.body.style.overflow = 'hidden';
    }
  }, [mobileMenu]);

  useEffect(() => {
    if (!slideEffect) {
      const timer = setTimeout(() => setMobileMenu(false), 1000);
      document.body.style.overflow = 'auto';
      return () => clearTimeout(timer);
    }
  }, [slideEffect]);

  return (
    <Container isDesktop={isDesktop}>
      <div className="wrapper">
        <Logo>
          <NavLink to="/">PurpleStone</NavLink>
        </Logo>

        {isDesktop && (
          <Gnb>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/all-coffees">All Coffees</NavLink>
            </li>
            <li className="nav-button-item">
              <NavLink to="/mycard">
                <Button
                  size="medium"
                  theme="primary"
                  label="Create My Card"
                  isRegular
                ></Button>
              </NavLink>
            </li>
          </Gnb>
        )}

        {!isDesktop && (
          <MobileButton onClick={() => setMobileMenu(true)}>
            ME
            <br />
            NU
          </MobileButton>
        )}
      </div>

      {mobileMenu && (
        <MenuMobile className={slideEffect ? 'menuMobile on' : 'menuMobile'}>
          <MobileLogo>
            <NavLink to="/">PurpleStone</NavLink>
            <p>내가 좋아하는 커피 취향 카드 만들기</p>
          </MobileLogo>
          <MobileGnb>
            <li onClick={() => setSlideEffect(false)}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li onClick={() => setSlideEffect(false)}>
              <NavLink to="/all-coffees">All Coffees</NavLink>
            </li>
            <li
              className="nav-button-item"
              onClick={() => setSlideEffect(false)}
            >
              <NavLink to="/mycard">
                <Button
                  size="medium"
                  theme="primary"
                  label="Create My Card"
                  isRegular
                ></Button>
              </NavLink>
            </li>
          </MobileGnb>

          <CloseButton
            className="closeBtn"
            onClick={() => setSlideEffect(false)}
          ></CloseButton>
        </MenuMobile>
      )}
    </Container>
  );
};

export default Navigation;

const spinning = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

const Container = styled.nav<{ isDesktop: boolean }>`
  position: absolute;
  top: 20px;
  width: 100%;
  padding: 0 2rem;
  z-index: 1000;

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

const MobileLogo = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 25px;

  a {
    font-family: Poppins;
    font-size: 5rem;
    letter-spacing: 1rem;
    font-weight: 600;
    line-height: 36px;
    text-align: left;
    color: ${colors.Primary_01};
    text-transform: uppercase;
  }

  p {
    font-family: 'Noto Sans KR', sans-serif;
    padding: 1rem 0;
    font-size: 2.2rem;
    font-weight: 500;
    line-height: 3rem;
    letter-spacing: -0.01em;
    color: ${colors.Secondary_01};
    background: #fff;
    text-align: center;
    display: inline-block;
  }
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

const MenuMobile = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
  width: 100%;
  height: 0%;
  background: ${colors.Secondary_03};
  overflow: hidden;
  transition: 0.3s;
  z-index: 10000;

  &.on {
    height: 100vh;
    padding: 60px 10vw;
    transition: 0.5s;
  }
`;

const MobileGnb = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  width: 100%;
  gap: 50px;

  li {
    font-size: 4rem;
  }
`;

const MobileButton = styled.button`
  padding: 0.3rem 0.8rem;
  font-size: 14px;
  font-weight: bold;
  color: #333;
  border: 2px solid #333;
  text-align: center;
  letter-spacing: 2px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 3vw;
  height: 3vw;
  min-width: 22px;
  min-height: 22px;
  border: 0px;
  background: transparent;
  cursor: pointer;

  &:hover {
    animation: ${spinning} 1s;
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    display: block;
    width: 100%;
    height: 1.5px;
    background: #333;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;
