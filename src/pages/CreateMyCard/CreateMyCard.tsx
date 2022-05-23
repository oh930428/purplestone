import styled from 'styled-components';
import Button from 'components/Button/Button';
import background from '../../assets/Images/bg-section.jpg';

import { maxWidth } from 'styles/mixin';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { Header, MakeMyCard } from 'components';
import { CoffeeOptionSection } from './components';
import { useFetchMyCardQuery } from 'store/api/createMyCard';

const CreateMyCard = () => {
  const { data, isLoading, isSuccess } = useFetchMyCardQuery();
  const userMyCard = useSelector<RootState>(state => state.myCardReducer);
  const handleClickSubmit = async () => {
    // await addMyCard(content);
  };

  if (isSuccess) {
    return (
      <Container>
        <Wrpper>
          <Header title={data.title} subTitle={data.subTitle} />
          <Flex>
            <CoffeeOptionSection data={data} />
            <MakeMyCard
              handleClickSubmit={handleClickSubmit}
              userMyCard={userMyCard}
            />
          </Flex>
          <ButtonContainer>
            <Button size="large" theme="primary" label="저장하기" />
            <Button
              size="large"
              theme="primary"
              label="공유하기"
              onClick={() => handleClickSubmit()}
            />
          </ButtonContainer>
        </Wrpper>
      </Container>
    );
  } else if (isLoading) {
    return <div>no data</div>;
  } else {
    return <div>not found</div>;
  }
};

export default CreateMyCard;

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
  flex-direction: column;
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
  padding-top: 5rem;
`;
