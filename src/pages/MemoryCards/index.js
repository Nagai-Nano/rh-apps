import React, { useState, useEffect } from 'react';
import { shuffle } from 'lodash';

import { PageContainer, CardContainer, Button, Count } from './Styles';

import data from './data';
import Card from './Card';

const cards = shuffle([...data, ...data]);

function MemoryCards() {
  const [opened, setOpened] = useState([]);
  const [matched, setMatched] = useState([]);
  const [move, setMove] = useState(0);

  useEffect(() => {
    if (opened.length < 2) return;

    const first = cards[opened[0]];
    const last = cards[opened[1]];
    if (first.id === last.id) {
      setMatched((prev) => [...prev, first.id]);
    }
  }, [opened]);

  const handleFlip = (idx) => () => {
    setOpened((prev) => (prev.length === 2 ? [idx] : [...prev, idx]));
    setMove((prev) => prev + 1);
  };

  const handleGameReset = () => {
    setOpened([]);
    setMatched([]);
    setMove(0);
  };

  return (
    <PageContainer>
      <Count>
        <h1>
          {move} <span>moves</span>
        </h1>
      </Count>
      <CardContainer>
        {cards.map((card, idx) => {
          let isFlipped = false;
          if (opened.includes(idx)) isFlipped = true;
          if (matched.includes(card.id)) isFlipped = true;

          return (
            <Card
              key={idx}
              card={card}
              isFlipped={isFlipped}
              onCardClick={!isFlipped ? handleFlip(idx) : undefined}
            />
          );
        })}
      </CardContainer>
      {matched.length === data.length && (
        <Button type="primary" size="large" onClick={handleGameReset}>
          Play again!
        </Button>
      )}
    </PageContainer>
  );
}

export default MemoryCards;
