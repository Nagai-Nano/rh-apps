import styled from 'styled-components';
import { Button as AntdButton } from 'antd';

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Count = styled.div`
  margin-bottom: 10px;
  align-self: flex-start;

  h1 {
    font-size: 2.5rem;
    line-height: 1;
    font-weight: bold;
    margin: 0;
    color: #8c8c8c;
  }
  span {
    font-size: 1rem;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 16rem);
  grid-gap: 1rem;
`;

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #ff4d4f;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.04);
  transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55),
    background 0.2s linear;
  transform-style: preserve-3d;

  .front,
  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .front {
    font-size: 5rem;
    color: #fff;
    font-weight: bold;
    line-height: 1;
  }

  .back {
    background: #f0f0f0;
    transform: rotateY(180deg);
    img {
      width: 100%;
      transform: scale(0.9);
    }
  }
`;

export const StyledCard = styled.div`
  height: 22rem;

  &:not(.flipped) {
    cursor: pointer;
    &:hover > ${CardInner} {
      background: #f5222d;
    }
  }

  &.flipped > ${CardInner} {
    transform: rotateY(180deg);
  }
`;

export const Button = styled(AntdButton)`
  margin-top: 1.5rem;
`;
