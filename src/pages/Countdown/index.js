import React, { useState, useEffect, useRef } from 'react';

import { PageContainer, CountdownTitle, CountdownWrapper } from './Styles';

const NEW_YEAR = new Date('2021 01 01').getTime();

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(0);
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      const current = new Date().getTime();
      const diff = NEW_YEAR - current;

      if (diff < 1000) {
        clearInterval(intervalId.current);
        setTimeLeft(0);
        return;
      }

      setTimeLeft(diff);
    }, 1000);

    return () => clearInterval(intervalId.current);
  });

  const pad0 = (num) => {
    return num.toString().padStart(2, '0');
  };

  const days = ~~(timeLeft / 86400000);
  const hours = ~~((timeLeft % 86400000) / 3600000);
  const minutes = ~~((timeLeft % 3600000) / 60000);
  const seconds = ~~((timeLeft % 60000) / 1000);

  return (
    <PageContainer>
      <CountdownTitle>Happy New Year 2021</CountdownTitle>
      <CountdownWrapper>
        <div className="countdown">
          <h4>Days</h4>
          <span>{pad0(days)}</span>
        </div>
        <div className="countdown">
          <h4>Hours</h4>
          <span>{pad0(hours)}</span>
        </div>
        <div className="countdown">
          <h4>Minutes</h4>
          <span>{pad0(minutes)}</span>
        </div>
        <div className="countdown">
          <h4>Seconds</h4>
          <span>{pad0(seconds)}</span>
        </div>
      </CountdownWrapper>
    </PageContainer>
  );
}

export default Countdown;
