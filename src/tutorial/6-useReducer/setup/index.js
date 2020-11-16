import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

const Index = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(data);
  const [showModel, setShowModel] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModel(true);
      setPeople([...people, { name }]);
    } else {
      setShowModel(true);
    }
  };

  return (
    <>
      {showModel && <Modal />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>{' '}
    </>
  );
};

export default Index;
