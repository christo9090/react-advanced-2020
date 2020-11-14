import React, { useState } from 'react';

const UseStateBasics = () => {
  const [text, setText] = useState('random title');

  const handleClick = () => {
    text === 'Something Else'
      ? setText('random title')
      : setText('Something Else');
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" type="button" onClick={handleClick}>
        Click Me
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
