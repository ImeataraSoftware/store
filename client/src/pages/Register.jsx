import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useRegisterMutation } from '../services/Auth';

import swal from 'sweetalert';

import { Navbar } from '../components/Navbar';

export const Register = () => {
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  if (isLoading) console.log('Loading...');

  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    address: '',
    city: '',
    zipCode: '',
    country: '',
    phone: '',
  });

  const [error, setError] = useState(null);

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    register({
      firstName: input.firstName,
      lastName: input.lastName,
      email: input.email,
      password: input.password,
      address: input.address,
      city: input.city,
      zipCode: input.zipCode,
      country: input.country,
      phone: input.phone,
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
              name="firstName"
              value={input.firstName}
              type="text"
              placeholder="First Name"
            />
            <input
              onChange={handleInput}
              name="lastName"
              value={input.lastName}
              type="text"
              placeholder="Last Name"
            />
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
            <input
              onChange={handleInput}
              name="address"
              value={input.address}
              type="text"
              placeholder="Address"
            />
            <input
              onChange={handleInput}
              name="city"
              value={input.city}
              type="text"
              placeholder="City"
            />
            <input
              onChange={handleInput}
              name="zipCode"
              value={input.zipCode}
              type="text"
              placeholder="Zip Code"
            />
            <input
              onChange={handleInput}
              name="country"
              value={input.country}
              type="text"
              placeholder="Country"
            />
            <input
              onChange={handleInput}
              name="phone"
              value={input.phone}
              type="text"
              placeholder="Phone"
            />
            <button onClick={handleSubmit} type="submit">
              Register
            </button>
            {error && <span>{error}</span>}
          </form>
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </>
  );
};
