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

  &::-webkit-scrollbar {
    width: 12px;
    height: 10px;
    background: #fff;
  }

  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    height: 6px;
    border: 2px solid transparent;
    background-clip: padding-box;
    border-radius: 7px;
    background-color: #8c8c8c;
  }
`;
