/* eslint-disable import/no-anonymous-default-export */
import { css } from 'styled-components';
import { ResponsiveByDeivceProps } from 'types/responsiveByDevice.type';

export const maxWidth = css`
  max-width: 1200px;
  margin: 0 auto;
`;

export const desktopMain: ResponsiveByDeivceProps = {
  maxWidth: '1200px',
  margin: '0 auto',
  font: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: '6rem',
    lineHeight: '8rem',
    letterSpacing: '-0.01em',
  },
  subFont: {
    fontFamily: 'Noto Sans KR, sans-serif',
    fontSize: '2.4rem',
    fontWeight: '500',
    lineHeight: '3.2rem',
    letterSpacing: '-0.01em',
  },
};

export const tabletMain: ResponsiveByDeivceProps = {
  maxWidth: '900px',
  margin: '0 auto',
  flexWrap: 'wrap',
  font: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: '6rem',
    lineHeight: '6rem',
    letterSpacing: '-0.01em',
  },
  subFont: {
    fontFamily: 'Noto Sans KR, sans-serif',
    fontWeight: '500',
    fontSize: '2.4rem',
    lineHeight: '2rem',
    letterSpacing: '-0.01em',
  },
};

export const mobileMain: ResponsiveByDeivceProps = {
  maxWidth: '600px',
  margin: '0 auto',
  flexWrap: 'wrap',
  font: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: '6rem',
    lineHeight: '4.2rem',
    letterSpacing: '-0.01em',
  },
  subFont: {
    fontFamily: 'Noto Sans KR, sans-serif',
    fontWeight: '500',
    fontSize: '2.4rem',
    lineHeight: '1.4rem',
    letterSpacing: '-0.01em',
  },
};
