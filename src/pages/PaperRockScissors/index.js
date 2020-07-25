import React, { useState } from 'react';
import { Button } from 'antd';

import {
  PageContainer,
  PageTitle,
  PageContent,
  Choice,
  Control,
  Message
} from './Styles';

import Rock from './assets/rock.png';
import Paper from './assets/paper.png';
import Scissors from './assets/scissors.png';

const CHOICES = [
  { id: 1, title: 'Paper', imgSrc: Paper, losesId: 3 },
  { id: 2, title: 'Rock', imgSrc: Rock, losesId: 1 },
  { id: 3, title: 'Scissors', imgSrc: Scissors, losesId: 2 }
];

function PaperRockScissors() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [userWin, setUserWin] = useState(0);
  const [computerWin, setComputerWin] = useState(0);
  const [gameStatus, setGameStatus] = useState('');

  const renderChoices = (disabled, choiceId) => (
    <div className="choices">
      {CHOICES.map((choice) => (
        <Choice
          key={choice.id}
          className={`${choiceId === choice.id ? 'active' : ''}`}
          style={{ margin: choice.id === 2 ? '0 2rem' : 0 }}
          onClick={
            disabled || gameStatus ? undefined : handleUserChoice(choice)
          }
        >
          <img src={choice.imgSrc} alt={choice.title} />
        </Choice>
      ))}
    </div>
  );

  const handleUserChoice = (choice) => () => {
    setUserChoice(choice);
  };

  const handleGameStart = () => {
    const randomChoice = CHOICES[~~(Math.random() * CHOICES.length)];
    setComputerChoice(randomChoice);

    if (randomChoice.id === userChoice.id) {
      setGameStatus('draw');
    } else if (userChoice.id === randomChoice.losesId) {
      setUserWin((prev) => prev + 1);
      setGameStatus('win');
    } else {
      setComputerWin((prev) => prev + 1);
      setGameStatus('lose');
    }
  };

  const handleGameReset = () => {
    setUserChoice(null);
    setComputerChoice(null);
    setGameStatus('');
  };

  return (
    <PageContainer>
      <PageTitle>Let's play Paper, Rock, Scissors!</PageTitle>
      <PageContent>
        <div className="player">
          <div className="title">You</div>
          <div className="score">{userWin}</div>
          {renderChoices(false, userChoice?.id)}
        </div>
        <h3 className="versus">vs</h3>
        <div className="computer">
          <div className="title">Computer</div>
          <div className="score">{computerWin}</div>
          {renderChoices(true, computerChoice?.id)}
        </div>
      </PageContent>
      <Control>
        {userChoice && !gameStatus && (
          <Button type="primary" size="large" onClick={handleGameStart}>
            GOOOOOOOOO!!!
          </Button>
        )}
        {gameStatus && (
          <Button type="primary" size="large" onClick={handleGameReset}>
            Play Again
          </Button>
        )}
      </Control>
      <Message className={gameStatus}>
        {gameStatus === 'win' && <h3>Congrats! You Won</h3>}
        {gameStatus === 'lose' && <h3>Uh Oh! You Lose</h3>}
        {gameStatus === 'draw' && <h3>Drewwwwwww</h3>}
      </Message>
    </PageContainer>
  );
}

export default PaperRockScissors;
