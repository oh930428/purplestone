import useWindowSize from 'hooks/useWindowSize';
import Confetti from 'react-confetti';
import { Size } from 'hooks/useWindowSize';

const ConfettiComponents = () => {
  const size: Size = useWindowSize();
  return <Confetti width={size.width} height={size.height} />;
};

export default ConfettiComponents;
