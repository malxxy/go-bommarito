import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../login-signup.css';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../../../utils/mutations';
import Auth from '../../../utils/auth';
import styled from 'styled-components';

const Footer = styled.p`
  border: 1px solid black;
  border-radius: 17px;
  width: 170vh;
  font-size: 24px;
  font-weight: 200;
  line-height: 1.5;
  color: white;
  background-color: #333;
  text-align: center;
  margin-left: 150px;

  /* Media query for screens smaller than 768px */
  @media (max-width: 767px) {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4 page">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your username"
                  name="username"
                  type="text"
                  value={formState.username}
                  onChange={handleChange}
                />
                <br></br>
                <input
                  className="form-input"
                  placeholder="First name"
                  name="firstName"
                  type="text"
                  value={formState.firstName}
                  onChange={handleChange}
                />
                <br></br>
                <input
                  className="form-input"
                  placeholder="Last name"
                  name="lastName"
                  type="text"
                  value={formState.lastName}
                  onChange={handleChange}
                />
                <br></br>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <br></br>
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <br></br>
                <button
                  className="mg-mainWhite btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer> 
        <p>© 2023 GoBommarito. All rights reserved.</p>
      </Footer>
    </main>
    
  );
};

export default Signup;