import styled from 'styled-components';
import { Spin } from 'antd';

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 270px;
  grid-gap: 1rem;
`;

export const ImageContainer = styled.div`
  padding: 7px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 2px;
  transition: all 0.2s linear;
  position: relative;

  &.clickable {
    cursor: pointer;
  }

  &.hoverable {
    &:hover {
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.07);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2px;
  }
`;

export const ImageLoading = styled(Spin)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageError = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    color: #ff4d4f;
    font-size: 2rem;
  }

  p {
    margin-top: 10px;
    margin-bottom: 0;
    color: #ff4d4f;
  }
`;

export const ErrorMessage = styled.div`
  margin-top: 3rem;
  text-align: center;
  font-size: 1.5rem;
  color: #ff4d4f;

  svg {
    font-size: 2rem;
  }

  p {
    font-size: 1rem;
  }
`;
