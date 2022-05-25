import styled from 'styled-components';
import Button from 'components/Button/Button';
import background from '../../assets/Images/bg-section.jpg';

import { maxWidth } from 'styles/mixin';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { Header, UserCard } from 'components';
import { CoffeeOptionSection } from './components';
import { useFetchMyCardQuery } from 'store/api/createMyCard';
import { useState } from 'react';
import { useAddUserCardListMutation } from 'store/api/userCardList';

const CreateMyCard = () => {
  const { data, isLoading, isSuccess } = useFetchMyCardQuery();
  const [addUserCardList] = useAddUserCardListMutation();
  const [userName, setUserName] = useState<string>('');
  const userMyCard = useSelector<RootState>(state => state.myCardReducer);

  const handleAddCard = async () => {
    await addUserCardList({
      id: Date.now(),
      userName: userName,
      userCardSmallType: userMyCard,
    });
  };

  if (isSuccess) {
    return (
      <Container>
        <Wrpper>
          <Header title={data.title} subTitle={data.subTitle} />
          <Flex>
            <CoffeeOptionSection />
            <UserCard
              userMyCard={userMyCard}
              userName={userName}
              setUserName={setUserName}
            />
            <ButtonWrapper>
              <Button size="large" theme="primary" label="캡처하기" />
              <Button
                size="large"
                theme="primary"
                label="게시하기"
                onPress={handleAddCard}
              />
            </ButtonWrapper>
          </Flex>
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

const ButtonWrapper = styled.div`
  position: relative;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;
