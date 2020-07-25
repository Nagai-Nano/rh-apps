import styled from 'styled-components';

export const PageContainer = styled.div``;

export const PageTitle = styled.h2`
  background: #13c2c2;
  color: #fff;
  font-weight: 700;
  font-size: 3.1rem;
  padding: 1.5rem 1rem;
  text-align: center;
  letter-spacing: 1px;
  border-radius: 2px;
  margin-bottom: 2rem;
`;

export const PageContent = styled.div`
  display: flex;
  justify-content: space-between;

  .player,
  .computer {
    width: 50%;
    text-align: center;
    color: #595959;

    .title {
      font-size: 2.8rem;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: 1px;
    }

    .score {
      font-size: 5rem;
    }
  }

  .computer {
    .title,
    .score {
      color: #ff4d4f;
    }

    .choices button {
      pointer-events: none;
    }
  }

  .versus {
    margin: 0 1rem;
    font-size: 4rem;
    color: #ccc;
    opacity: 0.7;
    font-weight: 700;
    align-self: center;
    margin-bottom: 10px;
  }

  .choices {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
  }
`;

export const Choice = styled.button`
  width: 120px;
  height: 120px;
  background: transparent;
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s all ease;
  opacity: 0.7;

  &.active,
  &:hover {
    background: #13c2c2;
    opacity: 1;
  }

  img {
    width: 80px;
    height: 80px;
  }
`;

export const Control = styled.div`
  margin-top: 3rem;
  text-align: center;
`;

export const Message = styled.div`
  h3 {
    text-align: center;
    font-size: 3rem;
    height: 8rem;
    margin: 0;
    line-height: 8rem;
    font-weight: bold;
    letter-spacing: 1px;
  }

  &.win h3 {
    color: #52c41a;
  }

  &.lose h3 {
    color: #ff4d4f;
  }

  &.draw h3 {
    color: #595959;
  }
`;
