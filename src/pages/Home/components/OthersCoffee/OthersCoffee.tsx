import React from 'react';
import styled from 'styled-components';

import { Header } from 'components';
import { ResponsiveByDeivceProps } from 'types/responsiveByDevice.type';
import CoverflowSection from './CoverflowSection';
import HeaderSkeleton from 'components/Skeleton/HeaderSkeleton';

import { useFetchOthersCoffeeQuery } from 'store/api/otherscoffee';

const OthersCoffee = ({
  maxWidth,
  margin,
  font,
  subFont,
}: ResponsiveByDeivceProps) => {
  const { data, isSuccess } = useFetchOthersCoffeeQuery();

  return (
    <Container>
      <div className="wrapper" style={{ maxWidth: maxWidth, margin: margin }}>
        {isSuccess ? (
          <Header
            title={data.title}
            subTitle={data.subTitle}
            font={font}
            subFont={subFont}
          />
        ) : (
          <HeaderSkeleton />
        )}
        <CoverflowSection />
      </div>
    </Container>
  );
};

export default OthersCoffee;

const Container = styled.section`
  .wrapper {
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 200px 20px;
  }
`;
