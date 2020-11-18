import React, { useState, useReducer, useRef } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import reducer from './reducer';

const defaultState = {
  people: [...data],
  isModalOpen: false,
  modalContent: 'hello world',
};

const Index = () => {
  const [name, setName] = useState('');

  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  const handleRemove = (id) => {
    const filteredPeople = state.people.filter((person) => person.id !== id);
    dispatch({ type: 'REMOVE_PERSON', payload: filteredPeople });
  };

  //console.log(state);
  return (
    <>
      {state.isModalOpen && (
        <Modal modelContent={state.modalContent} closeModal={closeModal} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add Person</button>
      </form>
      {state.people.map((p) => {
        return (
          <div key={p.id} className="item">
            <h4>{p.name}</h4>
            <button
              type="button"
              className=""
              onClick={() => handleRemove(p.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
