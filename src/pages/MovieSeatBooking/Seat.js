import React from 'react';

import { SeatContainer } from './Styles';

function Seat({ children, className = '', onSeatClick, ...props }) {
  return (
    <SeatContainer
      {...props}
      onClick={onSeatClick ? onSeatClick : undefined}
      className={`${!children ? 'default' : ''} ${className}`}
    >
      {children && <div>{children}</div>}
    </SeatContainer>
  );
}

export default Seat;
