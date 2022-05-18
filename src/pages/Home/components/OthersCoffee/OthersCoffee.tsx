import React from 'react';
import styled from 'styled-components';

import { Header } from 'components';
import { maxWidth } from 'styles/mixin';
import CoverflowSection from './CoverflowSection';
import { useFetchOthersCoffeeQuery } from 'store/api/otherscoffee';

const OthersCoffee = () => {
  const { data, error, isLoading, isSuccess } = useFetchOthersCoffeeQuery();

  return (
    <Container>
      {isSuccess && (
        <div className="wrapper">
          <Header title={data.title} subTitle={data.subTitle} />
          <CoverflowSection />
        </div>
      )}
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
