import { useLayoutEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';

import LineCircle from './LineCircle';

const DrawSvg = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1180px)' });
  const isTablet = useMediaQuery({
    query: '(min-width: 540px) and (max-width: 1179px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width: 539px)' });
  const div = useRef<HTMLDivElement>(null);

  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = div.current;

    let svg = document.getElementsByClassName(
      'svg-path'
    )[0] as SVGGeometryElement;
    if (!svg) return;

    const svgLength = svg.getTotalLength();
    svg.style.strokeDasharray = String(svgLength);
    svg.style.strokeDashoffset = String(svgLength);

    let handleScrollDrawLine = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        end: 'bottom bottom',
        onUpdate: self => {
          const draw = svgLength * self.progress;

          if (svg) {
            svg.style.strokeDashoffset = String(svgLength - draw);
          }
        },
      },
    });

    return () => {
      if (handleScrollDrawLine) handleScrollDrawLine.kill();
    };
  }, []);

  return (
    <Container
      isDesktop={isDesktop}
      isTablet={isTablet}
      isMobile={isMobile}
      ref={div}
    >
      <LineCircle />
    </Container>
  );
};

export default DrawSvg;

const Container = styled.div<{
  isMobile: boolean;
  isDesktop: boolean;
  isTablet: boolean;
}>`
  ${props =>
    props.isDesktop &&
    css`
      display: flex;
      align-items: flex-start;
      position: absolute;
      left: 50%;
      top: 0.5rem;
      transform: translateX(-50%);
      width: 100%;
      height: 85%;
      overflow: hidden;

      svg {
        width: 100%;
        height: 100%;
      }
    `}

  ${props =>
    props.isTablet &&
    css`
      width: 100%;
      height: 280vh;
      transform: none;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;

      svg {
        width: 100%;
        height: 100%;
      }
    `}

  ${props =>
    props.isMobile &&
    css`
      left: 0%;
      width: 100%;
      height: 260vh;
      position: static;
      transform: none;
      display: flex;
      overflow: hidden;

      svg {
        width: 100%;
        height: 100%;
      }
    `}
`;
