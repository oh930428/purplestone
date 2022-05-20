import styled, { keyframes, css } from 'styled-components';
import { SkeletonProps } from 'types/skeleton.types';

const Skeleton = (props: SkeletonProps) => {
  const { animated = false, ...restProps } = props;
  return <Container {...restProps} animated={animated} />;
};

export default Skeleton;

const skeletonAnimation = keyframes`
  0% {
    background-position: 100% 100%;
  }
  50% {
    background-position: 50% 100%;
  }
`;

const Container = styled.div<{ animated: boolean }>`
  background-color: #d7dbe2;
  ${props =>
    props.animated &&
    css`
      background-image: linear-gradient(
        90deg,
        #d7dbe2 0%,
        #ebeef2 40%,
        #d7dbe2 80%,
        #ebeef2 100%
      );
      background-size: 400% 100%;
      animation: ${skeletonAnimation} 1.3s linear infinite;
    `}
`;
