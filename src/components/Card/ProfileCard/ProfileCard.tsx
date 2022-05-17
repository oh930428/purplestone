import styled from 'styled-components';
import IconSocial from '../../Icon/IconSocial';

import { fonts, colors } from 'styles';
import { ProfileCardProps } from '../../../types/profileCard.type';

const ProfileCard = ({
  userName,
  descrition,
  thumbnail,
  background,
  iconSocial,
}: ProfileCardProps) => {
  return (
    <Container background={background}>
      <div className="header">
        <div className="header-thumbnail">
          <img
            src={require(`../../../assets/Images/${thumbnail}`)}
            alt={userName}
          />
        </div>
        <div className="header-title">
          <span>{userName}</span>
        </div>
      </div>
      <div className="main">
        <div
          className="main-section"
          dangerouslySetInnerHTML={{ __html: descrition }}
        ></div>
        <div className="main-socials">
          {iconSocial.map((icon, index) => (
            <IconSocial key={index} name={icon.name} />
          ))}
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div<{ background: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 338px;
  height: 426px;
  background: ${props =>
    `url(${require(`../../../assets/Images/${props.background}`)})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;

  .header {
    .header-thumbnail {
      width: 160px;
      height: 160px;
      border-radius: 20px;
      border: 2px solid ${colors.Secondary_04};
      background-color: rgb(238, 237, 222);

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
        transition: all 0.3s ease 0s;

        &:hover {
          transform: translateY(-25px) scale(1.2);
        }
      }
    }

    .header-title {
      padding: 10px 0;
      text-align: center;

      span {
        ${fonts.Headline1}
        line-height: 32px;
        color: #614e32;
        letter-spacing: -0.01em;
      }
    }
  }

  .main {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 8px;

    .main-section {
      height: 73px;
      ${fonts.MediumBody1};
      color: ${colors.Gray_02};
      text-align: center;
    }

    .main-socials {
      display: flex;
      gap: 8px;
    }
  }
`;

export default ProfileCard;
