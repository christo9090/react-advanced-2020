import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const user = await response.json();
    setUsers(user);
  };

  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);

  return (
    <>
      <h3>GitHub Users</h3>
      <ul className="users">
        {users.map((u) => {
          const { id, login, avatar_url, html_url } = u;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default UseEffectFetchData;
