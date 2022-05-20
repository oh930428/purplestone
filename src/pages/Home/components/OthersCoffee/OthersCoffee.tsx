import React from 'react';
import styled from 'styled-components';

import { Header } from 'components';
import { maxWidth } from 'styles/mixin';
import CoverflowSection from './CoverflowSection';
import HeaderSkeleton from 'components/Skeleton/HeaderSkeleton';

import { useFetchOthersCoffeeQuery } from 'store/api/otherscoffee';

const OthersCoffee = () => {
  const { data, isSuccess } = useFetchOthersCoffeeQuery();

  return (
    <Container>
      <div className="wrapper">
        {isSuccess ? (
          <Header title={data.title} subTitle={data.subTitle} />
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
    ${maxWidth}
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 200px 20px;
  }
`;
