import styled from 'styled-components';

export const PageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CountdownTitle = styled.h1`
  font-size: 5rem;
  color: #fff;
  display: block;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
`;

export const CountdownWrapper = styled.div`
  display: flex;

  .countdown {
    width: 8rem;
    text-align: center;

    &:not(:last-child) {
      margin-right: 3rem;
    }

    > h4 {
      font-size: 2rem;
      margin-bottom: 10px;
    }

    > span {
      font-size: 4rem;
      line-height: 1;
    }
  }
`;
