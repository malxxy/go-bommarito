import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, ApolloProvider} from '@apollo/client';
import { LOGIN_USER } from '../../../utils/mutations';
// import { useHistory } from 'react-router-dom';

// import '../../../login-signup.css';
import Auth from '../../../utils/auth';

const Login = (props) => {
  // const navigate = useNavigate();
  // const [formState, setFormState] = useState({ email: '', password: '' });
  // const [login, { error, data }] = useMutation(LOGIN_USER);

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
      navigate('/AdminHome'); 
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
    <main className="flex-row justify-center mb-4 page">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Login</h4>
          <div className="card-body">
            {/* {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/AdminHome"> to the admin homepage.</Link>
              </p> */}

              {data && navigate('/AdminHome')} {/* Add this line to redirect the user if data is not null */}
              <div className="col-12 col-lg-10">
                {/* ... */}
              </div>


            {/* ) : ( */}
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
                  className="btn btn-block btn-info"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            {/* )} */}

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
    </ApolloProvider>
  );
};

export default Login;
