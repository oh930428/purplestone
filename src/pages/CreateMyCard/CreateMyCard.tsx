import styled, { css } from 'styled-components';
import Button from 'components/Button/Button';
import background from '../../assets/Images/bg-section.jpg';
import 'react-confirm-alert/src/react-confirm-alert.css';

import { useState } from 'react';
import { maxWidth } from 'styles/mixin';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from '../../store/index';
import { Header, UserCard } from 'components';
import { useMediaQuery } from 'react-responsive';
import { confirmAlert } from 'react-confirm-alert';
import { CoffeeOptionSection } from './components';
import { useFetchMyCardQuery } from 'store/api/createMyCard';
import { desktopMain } from 'styles/mixin';
import { useAddUserCardListMutation } from 'store/api/userCardList';

const CreateMyCard = () => {
  const { data, isLoading, isSuccess } = useFetchMyCardQuery();
  const [addUserCardList] = useAddUserCardListMutation();
  const [userName, setUserName] = useState<string>('');
  const userMyCard = useSelector<RootState>(state => state.myCardReducer);
  const isDesktop = useMediaQuery({ query: '(min-width: 1180px)' });
  const navigate = useNavigate();

  const handleAddCard = async () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <Modal>
            <h1>게시하시겠습니까?</h1>
            <p>
              게시하기를 누르시면 All Coffees 페이지에 카드가 게시됩니다. <br />
              사람들과 취향을 공유해보세요.
            </p>
            <div className="button-wrapper">
              <button onClick={onClose}>취소하기</button>
              <button
                onClick={() => {
                  addUserCardList({
                    id: Date.now(),
                    userName: userName,
                    userCardSmallType: userMyCard,
                  });
                  navigate('/all-coffees');
                  onClose();
                }}
              >
                게시하기
              </button>
            </div>
          </Modal>
        );
      },
    });
  };

  if (isSuccess) {
    return (
      <Container>
        <Wrpper isDesktop={isDesktop}>
          <Header
            title={data.title}
            subTitle={data.subTitle}
            font={desktopMain.font}
            subFont={desktopMain.subFont}
          />
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
              ></Button>
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

const Wrpper = styled.div<{ isDesktop: boolean }>`
  width: 100%;
  padding: 0 2rem;

  ${props =>
    props.isDesktop &&
    css`
      ${maxWidth}
    `}
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

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8rem 5rem;
  background: #fff;
  border: 5px dashed #ccc;
  border-radius: 20px;
  z-index: 1000;

  h1 {
    font-size: 3.5rem;
  }

  p {
    padding: 3.5rem;
    font-size: 1.6rem;
    line-height: 2.2rem;
  }

  .button-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 5.5rem;

    button {
      font-size: 1.5rem;
      border: 1px solid #999;
      padding: 2rem 5rem;
      border-radius: 10px;
    }
  }
`;
