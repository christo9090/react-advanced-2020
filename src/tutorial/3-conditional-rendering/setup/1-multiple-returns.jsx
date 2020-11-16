import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarsons';

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

  const callUser = async () => {
    try {
      const userResponse = await fetch(url);
      //console.log(userResponse);
      if (userResponse.status <= 300 && userResponse.status >= 200) {
        const user = await userResponse.json();
        setIsLoading(false);
        setUser(user);
      } else if (userResponse.status > 300 || userResponse.status < 200) {
        throw new Error(userResponse.status);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log('sdad');
    }
  };

  useEffect(() => {
    setTimeout(() => {
      callUser();
    }, 2000);
  }, []);

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Error Occurred...</h2>;
  return <h2>{user.login}</h2>;
};
export default MultipleReturns;
