import React from 'react';

import { StyledCard, CardInner } from './Styles';

function Card({ card, isFlipped, onCardClick }) {
  return (
    <StyledCard className={isFlipped ? 'flipped' : ''} onClick={onCardClick}>
      <CardInner>
        <div className="front">?</div>
        <div className="back">
          <img src={card.image} alt={card.name} />
        </div>
      </CardInner>
    </StyledCard>
  );
}

export default Card;
