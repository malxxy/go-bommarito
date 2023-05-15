import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation, ApolloProvider} from '@apollo/client';
import { LOGIN_USER } from '../../../utils/mutations';
// import { useHistory } from 'react-router-dom';
// import '../../../login-signup.css';
import Auth from '../../../utils/auth';
const Login = (props) => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);
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
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);

      // Redirect the user to the homepage or another page after logging in
      navigate('/'); 
    } catch (e) {
      console.error(e);
    }
    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };
  return (
    <ApolloProvider>
    <main className="flex justify-center h-screen page">
        <div className="card bg-mainWhite p-10 my-5 rounded-md min-h-min">
          <h4 className="card-header text-mainBlack text-xl p-2">Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/AdminHome">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
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
                  className="btn-block"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}
            {error && (
              <div className="my-3 p-3 bg-danger text-grey">
                {error.message}
              </div>
            )}
          </div>
        </div>
    </main>
    </ApolloProvider>
  );
};
export default Login;