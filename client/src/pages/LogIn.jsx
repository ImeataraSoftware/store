import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useLoginMutation } from '../services/Auth';

import { Navbar } from '../components/Navbar';

export const LogIn = () => {
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  if (isLoading) console.log('Loading...');

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  console.log(input);

  const handleSubmit = (e) => {
    e.preventDefault();

    login({
      email: input.email,
      password: input.password,
    }).then((result) => {
      if (result.error) {
        setError(result.error.data.message);
      } else {
        setError(null);

        swal('Good job!', 'You clicked the button!', 'success');

        navigate('/home');
      }
    });
  };

  return (
    <>
      <div>
        <Navbar />
        <div
          className="h-fit mt-16 flex flex-col justify-center items-center"
          style={{ height: 'calc(100vh - 64px)' }}
        >
          <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col">
            <input
              onChange={handleInput}
              name="email"
              value={input.email}
              type="text"
              placeholder="Email"
            />
            <input
              onChange={handleInput}
              name="password"
              value={input.password}
              type="password"
              placeholder="Password"
            />
            <button onClick={handleSubmit} type="submit">
              Log In
            </button>
            {error && <span>{error}</span>}
          </form>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </>
  );
};
