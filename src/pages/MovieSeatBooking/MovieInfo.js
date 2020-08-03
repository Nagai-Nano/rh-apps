import React from 'react';
import moment from 'moment';
import { Button } from 'antd';

import {
  MovieInfoWrapper,
  MovieBackground,
  MovieInfoContent,
  Divider
} from './Styles';

function MovieInfo({ movie, date, time, dispatch }) {
  const handleDateChange = (d) => () => {
    dispatch({
      type: 'CHANGE_DATE',
      payload: d
    });
  };

  const handleTimeChange = (t) => () => {
    dispatch({
      type: 'CHANGE_TIME',
      payload: t
    });
  };

  return (
    <MovieInfoWrapper>
      <MovieBackground bgUrl={movie.bgUrl}>
        <div className="bg-overlay" />
      </MovieBackground>
      <MovieInfoContent>
        <div className="movie-info">
          <div className="info-left">
            <img src={movie.posterUrl} alt={movie.title} />
          </div>
          <div className="info-right">
            <h1 className="movie-title">{movie.title}</h1>
            <h3>
              Genres:{' '}
              {movie.genres.map((genre, idx) => (
                <span key={genre}>
                  {genre}
                  {idx + 1 < movie.genres.length && ', '}
                </span>
              ))}
            </h3>
            <h3>
              Duration: <span>{movie.duration}</span>
            </h3>
            <h3>
              Release Date: <span>{movie.releaseDate}</span>
            </h3>
            <h3>
              Price: <span>${movie.price}</span>
            </h3>
            <h3>
              Overview: <span>{movie.overview}</span>
            </h3>
          </div>
        </div>
        <Divider type="vertical" />
        <div className="airing-date-time">
          <div className="airing-date">
            <h1>{moment(date).format('dddd DD, MMMM')}</h1>
            <div className="list-date">
              {movie.airingDate.map((d) => (
                <Button
                  key={d}
                  shape="circle"
                  ghost={d !== date}
                  size="large"
                  type={d === date && 'primary'}
                  onClick={handleDateChange(d)}
                >
                  {moment(d).format('DD')}
                </Button>
              ))}
            </div>
          </div>
          <div className="airing-time">
            <h1>Time:</h1>
            <div className="list-time">
              {movie.airingTime.map((t) => (
                <Button
                  key={t}
                  size="large"
                  ghost={t !== time}
                  type={t === time && 'primary'}
                  onClick={handleTimeChange(t)}
                >
                  {t}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </MovieInfoContent>
    </MovieInfoWrapper>
  );
}

export default MovieInfo;
