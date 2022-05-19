import styled from 'styled-components';

import { colors, fonts } from '../../../styles';
import { MyCardTypeProps } from 'types/myCard.types';
import { CoffeeOptionProps } from 'types/myCard.types';
import { useDispatch } from 'react-redux';
import { setSelectOptions } from 'store/state/MyCardSlice';

interface Props {
  option: CoffeeOptionProps;
}

const ProcessCard = ({ option }: Props) => {
  const dispatch = useDispatch();

  const handleSelectedOption = (
    e: any,
    id: string,
    name: string,
    description: string,
    selectedImage: string
  ) => {
    const target =
      e.currentTarget.dataset.type || e.currentTarget.parentNode.dataset.type;
    dispatch(
      setSelectOptions({
        id: id,
        type: target,
        name: name,
        description: description,
        image: selectedImage,
      })
    );

    // const activeClass = e.target.closest('.active');
    // if (activeClass) {
    //   activeClass.classList.remove('active'); // TODO: active가 안지워짐. 수정필요
    // }
  };

  return (
    <Container className="option-item">
      <div className="header">{option.text}</div>
      <div className="main">
        {option.types &&
          option.types.map((type: MyCardTypeProps, index: number) => (
            <article
              data-type={option.name}
              className="main-section"
              key={index}
              onClick={e =>
                handleSelectedOption(
                  e,
                  type.id,
                  type.name,
                  type.description,
                  type.image
                )
              }
            >
              <div className="main-thumbnail">
                <img
                  src={require(`../../../assets/Icons/${type.image}`)}
                  alt={type.name}
                />
              </div>
              <div className="main-title">
                <span className="name">{type.name}</span>
              </div>
            </article>
          ))}
      </div>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 1rem;
  padding: 2.4rem 2rem;
  background-color: ${colors.White};
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  .header {
    margin-bottom: 0.7rem;
    ${fonts.Headline2}
    line-height: 3.2rem;
    letter-spacing: -0.01em;
    color: ${colors.Primary_01};
  }

  .main {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(90px, auto);
    grid-gap: 1.5rem;

    .main-section {
      display: flex;
      flex-flow: column;
      align-items: center;
      width: 11.8rem;
      gap: 0.5rem;
      cursor: pointer;

      .main-thumbnail {
        img {
          width: 9rem;
          height: 9rem;
          background-color: ${colors.Gray_06};
          box-sizing: border-box;
          border-radius: 50%;
          padding: 0.5rem;
          object-fit: contain;
          transition: transform 0.1s linear;
        }
      }

      .main-title {
        .name {
          font-family: 'Noto Sans CJK KR';
          font-weight: bold;
          font-size: 1.2rem;
          line-height: 1.8rem;
          letter-spacing: 0.02rem;
        }
      }
    }

    .main-section:hover {
      .main-thumbnail img {
        transform: scale(1.2);
      }
    }
  }
`;

export default ProcessCard;
