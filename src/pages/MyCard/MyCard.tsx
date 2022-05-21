import styled from 'styled-components';
import Button from 'components/Button/Button';
import background from '../../assets/Images/bg-section.jpg';

import { maxWidth } from 'styles/mixin';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { useState, useEffect } from 'react';
import { Header, MakeMyCard } from 'components';
import { CoffeeOptionSection } from './components';
import { MyCardTypeProps } from '../../types/myCard.types';
import { useFetchMyCardQuery, useAddMyCardMutation } from 'store/api/myCard';

const MyCard = () => {
  const { data, error, isLoading, isSuccess } = useFetchMyCardQuery();
  const [cardOpton, setCardOpton] = useState({});

  const [addMyCard] = useAddMyCardMutation(); // TODO: 카드 추가하는 api
  const selectedOption = useSelector<RootState>(state => state.myCardReducer);

  useEffect(() => {
    data && setCardOpton(data?.makeMyCardOption);
    localStorage.setItem(
      'cardOptionItem',
      JSON.stringify(data?.makeMyCardOption)
    );
  }, [data]);

  const cardOptionUpdate = (option: MyCardTypeProps) => {
    setCardOpton(cardInitOpton => {
      const updated = { ...cardInitOpton };
      updated[option.type] = option;
      return updated;
    });
  };

  const handleClickSubmit = async (cardOpton: any) => {
    // await addMyCard();
  };

  return (
    <Container>
      {isSuccess && (
        <Wrpper>
          <Header title={data.title} subTitle={data.subTitle} />
          <Flex>
            <CoffeeOptionSection
              data={data}
              cardOptionUpdate={cardOptionUpdate}
            />
            <MakeMyCard
              cardOpton={cardOpton}
              selectedOption={selectedOption}
              handleClickSubmit={handleClickSubmit}
            />
          </Flex>
          <ButtonContainer>
            <Button size="large" theme="primary" label="저장하기" />
            <Button
              size="large"
              theme="primary"
              label="공유하기"
              onClick={() => handleClickSubmit(cardOpton)}
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
