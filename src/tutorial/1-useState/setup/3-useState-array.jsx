import React, { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeName = (id) => {
    const updatedPeople = [...people].filter((p) => p.id !== id);
    setPeople(updatedPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeName(id)}>X</button>
          </div>
        );
      })}
      <button className="btn" onClick={() => setPeople([])}>
        Delete All
      </button>
    </>
  );
};

export default UseStateArray;
