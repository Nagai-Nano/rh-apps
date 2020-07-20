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
  display: block;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 10px;
  font-weight: bold;
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
      color: #595959;
    }

    > span {
      font-size: 4rem;
      line-height: 1;
      color: #595959;
    }
  }
`;
