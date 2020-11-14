import React from 'react';

const ErrorExample = () => {
  const title = 'Random Title';

  const handleClick = () => {
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
