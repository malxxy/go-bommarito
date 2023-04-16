import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import '../../../login-signup.css';
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from '../../../utils/mutations';
import Auth from '../../../utils/auth';

const Signup = () => {
  
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    name: '',
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


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await addProfile({
        variables: { ...formState },
      });

      Auth.login(data.addProfile.token);

      // Redirect the user to the homepage or another page after logging in
      navigate('/AdminHome'); 
    } catch (e) {
      console.error(e);
    }
    // clear form values
    setFormState({
      username: '',
      password: '',
    });
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
                  name="name"
                  type="text"
                  value={formState.name}
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
                  className="btn btn-block btn-info"
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
      <footer class="footer"> 
              <p>© 2023 GoBommarito. All rights reserved.</p>
      </footer>
    </main>
    
  );
};

export default Signup;