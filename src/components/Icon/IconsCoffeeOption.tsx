import styled from 'styled-components';
import { colors } from 'styles';
import { userOption } from '../../types/cardUserSmall.type';

interface Props {
  option: userOption;
}

const IconsCoffeeOption = ({ option }: Props) => {
  return (
    <Container>
      <article className={`icon ${option.type}-image`}>
        <img
          src={require(`../../assets/Icons/${option.image}`)}
          alt="아이콘 이미지"
        />
      </article>
    </Container>
  );
};

export default IconsCoffeeOption;

const Container = styled.div`
  .icon {
    height: 6rem;
    background-color: ${colors.White};
    border-radius: 10px;
    padding: 5px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .brand-image {
    img {
      width: 95%;
      height: 95%;
      object-fit: contain;
    }
  }
`;
