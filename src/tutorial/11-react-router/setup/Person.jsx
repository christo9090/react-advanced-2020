import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const { id } = useParams();
  const person = data.find((p) => p.id.toString() === id);

  return (
    <div>
      <h2>Name: {person.name}</h2>
      <p>ID: {person.id}</p>
      <Link className="btn" to="/people">
        {'<'} Back To People
      </Link>
    </div>
  );
};

export default Person;
