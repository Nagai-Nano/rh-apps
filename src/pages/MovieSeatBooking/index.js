import React, { useReducer } from 'react';
import { Divider } from 'antd';

import {
  PageContainer,
  Select,
  ShowCase,
  SeatList,
  SeatRow,
  Message
} from './Styles';

import movies from './movies';
import MovieInfo from './MovieInfo';
import Seat from './Seat';

const ROWS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

const initState = {
  selectedMovie: movies[0],
  date: movies[0].airingDate[0],
  time: movies[0].airingTime[0],
  selectedSeat: []
};

const movieReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SELECT_MOVIE':
      return { ...state, ...payload };
    case 'CHANGE_DATE':
      return { ...state, date: payload };
    case 'CHANGE_TIME':
      return { ...state, time: payload };
    case 'ADD_SEAT':
      return {
        ...state,
        selectedSeat: [...state.selectedSeat, payload]
      };
    case 'REMOVE_SEAT':
      return {
        ...state,
        selectedSeat: state.selectedSeat.filter((seat) => seat !== payload)
      };
    default:
      return state;
  }
};

function MovieSeatBooking() {
  const [state, dispatch] = useReducer(movieReducer, initState);
  const { selectedMovie, date, time, selectedSeat } = state;

  const handleMovieChange = (value) => {
    const newMovie = movies.find((movie) => movie.title === value);
    dispatch({
      type: 'SELECT_MOVIE',
      payload: {
        selectedMovie: newMovie,
        date: newMovie.airingDate[0],
        time: newMovie.airingTime[0],
        selectedSeat: []
      }
    });
  };

  const handleSeatSelect = (label) => () => {
    const isSeatExists = selectedSeat.find((seat) => seat === label);
    dispatch({
      type: isSeatExists ? 'REMOVE_SEAT' : 'ADD_SEAT',
      payload: label
    });
  };

  const renderSeats = () => {
    return ROWS.map((row) => (
      <SeatRow
        key={row}
        style={{ marginBottom: row === 'B' || row === 'F' ? '3rem' : '1rem' }}
      >
        {Array.from({ length: 10 }).map((_, idx) => {
          const index = idx + 1;
          const label = row + index;
          const isBooked = selectedMovie.bookedSeat.includes(label);
          const isSelected = selectedSeat.includes(label);

          return (
            <Seat
              key={idx}
              onSeatClick={!isBooked && handleSeatSelect(label)}
              className={`${
                index === 2 ? 'span-right' : index === 9 ? 'span-left' : ''
              } ${isBooked ? 'booked' : ''} ${isSelected ? 'selected' : ''}`}
            >
              {label}
            </Seat>
          );
        })}
      </SeatRow>
    ));
  };

  return (
    <PageContainer>
      <Select value={selectedMovie.title} onChange={handleMovieChange}>
        {movies.map((movie) => (
          <Select.Option key={movie.title} value={movie.title}>
            {movie.title}
          </Select.Option>
        ))}
      </Select>
      <MovieInfo
        movie={selectedMovie}
        date={date}
        time={time}
        dispatch={dispatch}
      />
      <ShowCase>
        <div>
          <Seat /> <span>Available</span>
        </div>
        <div>
          <Seat className="selected" /> <span>Selected</span>
        </div>
        <div>
          <Seat className="booked" /> <span>Booked</span>
        </div>
      </ShowCase>
      <SeatList>{renderSeats()}</SeatList>
      <Divider />
      <Message>
        You have selected <span>{selectedSeat.length}</span> seats, total is{' '}
        <span>${selectedMovie.price * selectedSeat.length}</span>
      </Message>
    </PageContainer>
  );
}

export default MovieSeatBooking;
