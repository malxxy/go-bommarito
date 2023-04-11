// import React from "react";

// function Signup() {
//     return (
//         <div>
//         <h1>Signup</h1>
//         </div>
//     );
//     }

//     export default Signup;
    
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// import { useMutation } from '@apollo/client';
// import { ADD_PROFILE } from '../../utils/mutations';

// import Auth from '../../utils/auth';

// const Signup = () => {
//   const [formState, setFormState] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

//   // update state based on form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   // submit form
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(formState);

//     try {
//       const { data } = await addProfile({
//         variables: { ...formState },
//       });

//       Auth.login(data.addProfile.token);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <main className="flex-row justify-center mb-4">
//       <div className="col-12 col-lg-10">
//         <div className="card">
//           <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
//           <div className="card-body">
//             {data ? (
//               <p>
//                 Success! You may now head{' '}
//                 <Link to="/">back to the homepage.</Link>
//               </p>
//             ) : (
//               <form onSubmit={handleFormSubmit}>
//                 <input
//                   className="form-input"
//                   placeholder="Your username"
//                   name="name"
//                   type="text"
//                   value={formState.name}
//                   onChange={handleChange}
//                 />
//                 <input
//                   className="form-input"
//                   placeholder="Your email"
//                   name="email"
//                   type="email"
//                   value={formState.email}
//                   onChange={handleChange}
//                 />
//                 <input
//                   className="form-input"
//                   placeholder="******"
//                   name="password"
//                   type="password"
//                   value={formState.password}
//                   onChange={handleChange}
//                 />
//                 <button
//                   className="btn btn-block btn-info"
//                   style={{ cursor: 'pointer' }}
//                   type="submit"
//                 >
//                   Submit
//                 </button>
//               </form>
//             )}

//             {error && (
//               <div className="my-3 p-3 bg-danger text-white">
//                 {error.message}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import { validateEmail } from '../../../utils/helper';

function SignUpForm() {

    const [formState, setFormState] = useState({ name: '', email: '', password: '' });

    const [errorMessage, setErrorMessage] = useState('');

    const { name, email, password } = formState;

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
    
                if(!isValid) {
                    setErrorMessage('please enter a valid email');
                } else {
                    setErrorMessage('');
                }

            } else {
                if (!e.target.value.length) {
                  setErrorMessage(`${e.target.name} is required.`);
                } else {
                  setErrorMessage('');
                } 
        }

        if (!errorMessage) {
        setFormState({...formState, [e.target.name]: e.target.value })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

return (
    <section class="justify-content-center" id="contact-section">
        <h1 data-testid='h1tag' className="contact">Sign Up</h1>
        <hr></hr>
        <form class="justify-content-center" id="contact-form">
            <div>
                <label htmlFor="name">name:</label>
                <input class="form-control" type="text" name="name"  defaultValue={name} onBlur={handleChange}/>
            </div>
            <div >
                <label htmlFor="email">email:</label>
                <input class="form-control" type="email"  name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div >
                <label htmlFor="password">password:</label>
                <input class="form-control" type="password"  name="password" defaultValue={password} onBlur={handleChange} />
            </div>
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}

            <div>
            <button data-testid='button' class="btn btn-outline-dark mt-4" type="submit" onSubmit={handleSubmit}>Submit</button>
            </div>
        </form>
    </section>
    );
}

export default SignUpForm;