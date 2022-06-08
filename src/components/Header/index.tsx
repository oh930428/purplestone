import styled from 'styled-components';

import { colors } from 'styles';
import { HeaderProps } from '../../types/header.type';

const Header = ({ title, subTitle, textAlign, font, subFont }: HeaderProps) => {
  return (
    <Container textAlign={textAlign}>
      <div className="title">
        <span style={font}>{title}</span>
      </div>
      <div className="subtitle">
        <span style={subFont}>{subTitle}</span>
      </div>
    </Container>
  );
};

const Container = styled.div<{ textAlign?: string }>`
  display: flex;
  gap: 7px;
  flex-flow: column;
  align-items: ${props => (props.textAlign ? props.textAlign : 'center')};
  padding-bottom: 60px;

  .title {
    display: flex;
    align-items: flex-end;
    margin-bottom: 1rem;

    span {
      color: ${colors.Primary_01};
      background: linear-gradient(
        to top,
        ${colors.Secondary_03} 40%,
        transparent 50%
      );
    }
  }
  .subtitle {
    span {
      color: ${colors.Secondary_01};
    }
  }
`;

export default Header;
