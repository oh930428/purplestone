import styled, { keyframes } from 'styled-components';

const Loader = () => {
  return (
    <Container>
      <svg
        className="loading"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="circle"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="path"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </Container>
  );
};
export default Loader;

const spin = keyframes`
  from { -webkit-transform: rotate(0deg) } 
  to { -webkit-transform: rotate(360deg) } 
  `;

const Container = styled.div`
  width: 3.5rem;
  margin: 3rem auto;

  .loading {
    animation: ${spin} 1s linear infinite;
  }

  .circle {
    color: rgba(109, 40, 217, 0.25);
  }

  .path {
    color: rgba(109, 40, 217, 0.75);
  }
`;
