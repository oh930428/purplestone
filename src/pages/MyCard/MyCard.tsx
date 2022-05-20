import styled from 'styled-components';
import Button from 'components/Button/Button';
import background from '../../assets/Images/bg-section.jpg';

import { maxWidth } from 'styles/mixin';
import { Header, MakeMyCard } from 'components';
import { useFetchMyCardQuery } from 'store/api/myCard';
import { CoffeeOptionSection } from './components';
import { useState } from 'react';

const MyCard = () => {
  const { data, error, isLoading, isSuccess } = useFetchMyCardQuery();

  const handleClick = () => {};

  return (
    <Container>
      {isSuccess && (
        <Wrpper>
          <Header title={data.title} subTitle={data.subTitle} />
          <Flex>
            <CoffeeOptionSection data={data} />
            <MakeMyCard />
          </Flex>
          <ButtonContainer>
            <Button size="large" theme="primary" label="저장하기" />
            <Button
              size="large"
              theme="primary"
              label="공유하기"
              onClick={handleClick}
            />
          </ButtonContainer>
        </Wrpper>
      )}

      {isLoading && <div>로딩중..</div>}
      {error && <div>no data</div>}
    </Container>
  );
};

export default MyCard;

const Container = styled.div`
  width: 100%;
  padding: 21rem 0;
  background-image: url(${background});
`;

const Wrpper = styled.div`
  ${maxWidth}
`;

const Flex = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 5rem;
`;

const ButtonContainer = styled.div`
  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;
