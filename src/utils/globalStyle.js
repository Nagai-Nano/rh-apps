import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    font-family: 'Nunito', sans-serif;
    background: #e9ebee;
    color: rgba(0, 0, 0, 0.85);
  }

  .spin-center {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
