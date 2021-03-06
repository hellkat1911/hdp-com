import React, { useState } from 'react';
import StyledWordmark from './styles/StyledWordmark';

const Wordmark = () => {
  const [msg, setMsg] = useState('Hello, world :)');

  const handleClick = () => {
    const greetings = ['Hello, world :)', ':() { :|:& }; :'];
    setMsg(msg === greetings[0] ? greetings[1] : greetings[0]);
  };

  return (
    <StyledWordmark>
      <div>
        <img
          src="/images/hellcat-128x128.png"
          alt="hdp_ skull with horns icon"
          onClick={handleClick}
        />
        <p>{msg}</p>
        <h1 className="headline">
          hdp<span>_</span>
        </h1>
      </div>
    </StyledWordmark>
  );
};

export default Wordmark;
