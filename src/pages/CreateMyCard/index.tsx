import styled, { css } from 'styled-components';
import { Header, CardUser, Loader } from 'components';
import { useCallback, useRef, useState } from 'react';

import Button from 'components/Button';
import SkeletonCoffeeOption from 'components/Skeleton/SkeletonCoffeeOption';

import background from '../../assets/Images/bg-section.jpg';
import 'react-confirm-alert/src/react-confirm-alert.css';

import download from 'downloadjs';
import { toPng } from 'html-to-image';
import { maxWidth } from 'styles/mixin';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { desktopMain } from 'styles/mixin';
import { RootState } from '../../store/index';
import { useMediaQuery } from 'react-responsive';
import { confirmAlert } from 'react-confirm-alert';
import { CategorySection } from './components';
import { useFetchMyCardQuery } from 'store/api/createMyCard';
import { useAddUserCardListMutation } from 'store/api/userCardList';

const CreateMyCard = () => {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const [userName, setUserName] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const { data, isLoading, isSuccess } = useFetchMyCardQuery();
  const [addUserCardList] = useAddUserCardListMutation();

  const userMyCard = useSelector<RootState>(state => state.myCardReducer);
  const isDesktop = useMediaQuery({ query: '(min-width: 1180px)' });

  /**
   * CreateMyCard 페이지에서 "게시하기" 버튼을 눌렀을때, 컨펌창을 띄운다.
   */
  const handleConfirm = () => {
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
              <button onClick={() => handleAddCard(onClose)}>게시하기</button>
            </div>
          </Modal>
        );
      },
    });
  };

  /**
   * 컨펌창에서 "게시하기" 버튼 눌렀을때, POST API 호출
   * @param {funtion} onClose 컨펌창이 닫히는 함수
   */
  const handleAddCard = useCallback(
    async (onClose: { (): void }) => {
      await addUserCardList({
        id: Date.now(),
        userName: userName,
        userCardSmallType: userMyCard,
      });
      navigate('/all-coffees');
      onClose();
    },
    [addUserCardList, navigate, userMyCard, userName]
  );

  const handleCapture = useCallback(async () => {
    setLoading(true);
    if (cardRef.current) {
      download(await toPng(cardRef.current), 'MyCard.png');
    }
    setLoading(false);
  }, []);

  return (
    <Container>
      <Wrpper isDesktop={isDesktop}>
        {isSuccess ? (
          <>
            <Header
              title={data.title}
              subTitle={data.subTitle}
              font={desktopMain.font}
              subFont={desktopMain.subFont}
            />

            <Contents>
              <CategorySection />

              <div ref={cardRef} className="card-wrapper">
                <CardUser
                  userMyCard={userMyCard}
                  userName={userName}
                  setUserName={setUserName}
                />

                {loading && <Loader />}
              </div>

              <ButtonWrapper>
                <Button
                  size="large"
                  theme="primary"
                  label="캡처하기"
                  onPress={() => handleCapture()}
                />
                <Button
                  size="large"
                  theme="primary"
                  label="게시하기"
                  onPress={handleConfirm}
                ></Button>
              </ButtonWrapper>
            </Contents>
          </>
        ) : (
          <SkeletonCoffeeOption />
        )}
        {isLoading && <SkeletonCoffeeOption />}
      </Wrpper>
    </Container>
  );
};

export default CreateMyCard;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 21rem 0;
  background-image: url(${background});

  .card-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .loader {
    position: absolute;
  }
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

const Contents = styled.div`
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
