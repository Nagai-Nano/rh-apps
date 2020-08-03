import styled from 'styled-components';
import { Select as AntdSelect, Divider as AntdDivider } from 'antd';

export const PageContainer = styled.div``;

export const Select = styled(AntdSelect)`
  width: 25rem;
  margin-bottom: 1rem;
`;

export const MovieInfoWrapper = styled.div`
  border-radius: 2px;
  position: relative;
  height: 30rem;
`;

export const MovieBackground = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .bg-overlay {
    height: 100%;
    border-radius: 2px;
    background-image: linear-gradient(
      to right,
      rgba(14.12%, 14.51%, 16.86%, 0.95) 150px,
      rgba(22.35%, 22.35%, 22.35%, 0.84) 100%
    );
  }
`;

export const MovieInfoContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;

  .movie-info {
    width: 70%;
    display: flex;

    .info-left {
      width: 17rem;
      margin-right: 2rem;
      flex-shrink: 0;

      img {
        width: 100%;
        border-radius: 4px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
      }
    }

    .info-right {
      h1.movie-title {
        font-size: 2.5rem;
        font-weight: bold;
        color: #fff;
        line-height: 1;
        letter-spacing: 1px;
        margin-bottom: 1rem;
      }

      h3 {
        font-size: 1.2rem;
        color: #13c2c2;
        font-weight: 600;
        letter-spacing: 0.5px;
        margin-bottom: 0;

        span {
          font-size: 1.1rem;
          font-weight: normal;
          color: #fff;
        }
      }
    }
  }

  .airing-date-time {
    flex-grow: 0;

    .airing-date h1,
    .airing-time h1 {
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-size: 1.8rem;
      line-height: 1;
      font-weight: 600;
    }

    .airing-date .list-date {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-gap: 10px;
    }

    .airing-time {
      margin-top: 2rem;
      h1 {
        font-size: 1.2rem;
      }

      .list-time {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px;
      }
    }
  }
`;

export const Divider = styled(AntdDivider)`
  height: 100%;
  border-left-color: #13c2c2;
  margin: 0 2rem;
`;

export const ShowCase = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;

  & > div {
    display: inline-flex;
    align-items: center;
    margin-right: 2rem;

    span {
      margin-left: 7px;
      font-size: 1.03rem;
    }
  }
`;

export const SeatContainer = styled.div`
  border: 1px solid #d4d4d5;
  border-radius: 4px;
  width: 5rem;
  height: 4rem;

  &.default {
    width: 2rem;
    height: 2rem;
    cursor: auto !important;
  }

  &:not(.booked) {
    cursor: pointer;
    transition: 0.2s all linear;

    &:hover {
      border-color: #87e8de;
      background: #87e8de;
    }
  }

  &.selected {
    color: #fff;
    border-color: #13c2c2;
    background-color: #13c2c2;
  }

  &.booked {
    color: #8c8c8c;
    background-color: #d4d4d5;
  }

  & > div {
    padding: 1rem;
    text-align: center;
    line-height: 2rem;
  }

  &.span-right {
    grid-column: span 2;
    justify-self: start;
  }

  &.span-left {
    grid-column: span 2;
    justify-self: end;
  }
`;

export const SeatList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 3rem;
`;

export const SeatRow = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
  justify-items: center;
  margin-bottom: 1rem;
`;

export const Message = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 0;
  font-weight: 600;

  span {
    color: #13c2c2;
  }
`;
