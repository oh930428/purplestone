import { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import LineCircle from './LineCircle';

const DrawSvg = () => {
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
    <Container ref={div}>
      <LineCircle />
    </Container>
  );
};

export default DrawSvg;

const Container = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;

  svg {
    padding-bottom: 8rem;
    width: 100%;
    height: 100%;
  }
`;
