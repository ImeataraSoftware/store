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

        localStorage.setItem('id', result.data.response.id);

        localStorage.setItem('firstName', result.data.response.firstName);

        localStorage.setItem('lastName', result.data.response.lastName);

        localStorage.setItem('email', result.data.response.email);

        localStorage.setItem('address', result.data.response.address);

        localStorage.setItem('city', result.data.response.city);

        localStorage.setItem('zipCode', result.data.response.zipCode);

        localStorage.setItem('country', result.data.response.country);

        localStorage.setItem('phone', result.data.response.phone);

        localStorage.setItem('token', result.data.response.token);

        swal('Good job!', 'You clicked the button!', 'success');

        navigate('/home');
      }
    });
  };

  // for (let key in localStorage) {
  //   console.log(key, localStorage.getItem(key));
  // }

  // import CryptoJS from 'crypto-js';

  // const { VITE_APP_JWT, VITE_APP_CRYPTO_KEY } = import.meta.env;

  // if (customer !== null) {
  //   try {
  //     const bytes = CryptoJS.AES.decrypt(customer.email, VITE_APP_CRYPTO_KEY);

  //     const decryptedId = bytes.toString(CryptoJS.enc.Utf8);

  //     console.log(decryptedId);
  //   } catch (error) {
  //     console.log('Error al desencriptar:', error);
  //   }
  // }

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
          <Link to="/logup">Log Up</Link>
        </div>
      </div>
    </>
  );
};
