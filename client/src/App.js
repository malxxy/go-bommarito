// import React from 'react';
// import './App.css';
// import Navbar from './components';
// import Hero from './components/hero';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import Discover from './components/pages/Discover';
// import SanDiego from './components/pages/San Diego'; 
// import FoodDrink from './components/pages/FoodDrink';
// import Signup from './components/pages/Signup';
// import Login from './components/pages/Login';
// import Lifestyle from './components/pages/Lifestyle';
// import Destinations from './components/pages/Destinations';
// import Sports from './components/pages/Sports';
// // import People from './components/pages/People';
// import ArtCulture from './components/pages/ArtCulture'; 
// import Discover from './components/BlogList'; //
// import People from './components/ProfileList'; //

// // Construct our main GraphQL API endpoint
// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// // Construct request middleware that will attach the JWT token to every request as an `authorization` header
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('id_token');
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//     <Router>
//      <Navbar />
//      {/* <Hero /> */}
//      <Routes>
//       {/* <Switch> */}
//         <Route path="/discover" element ={<Discover />} />
//         <Route path="/San Diego" element={<SanDiego />}/> 
//         <Route path="/FoodDrink" element={<FoodDrink />}/>
//         <Route path="/Lifestyle" element={<Lifestyle />}/>
//         <Route path="/Destinations" element={<Destinations />}/>
//         <Route path="/Sports" element={<Sports />}/>
//         <Route path="/People" element={<People />}/>
//         <Route path="/ArtCulture" element={<ArtCulture />}/>
//         <Route path="/signup" element={<Signup />}/>
//         <Route path="/login" element={<Login />}/>
//         <Route path="/home" element ={<Hero />} />
//         <Route path= "/"  element={<Hero/>}/>
//      {/* </Switch> */}
//      </Routes>
//     </Router>
//     </ApolloProvider>
//   );
// }

// export default App;

import React from 'react';
import './App.css';
import Navbar from './components';
import Hero from './components/hero';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Discover from './components/pages/Discover';
import SanDiego from './components/pages/San Diego'; 
import FoodDrink from './components/pages/FoodDrink';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import Lifestyle from './components/pages/Lifestyle';
import Destinations from './components/pages/Destinations';
import Sports from './components/pages/Sports';
import People from './components/pages/People';
import ArtCulture from './components/pages/ArtCulture'; 
import Discover from './components/pages/Discover'; //

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
     <Navbar />
     {/* <Hero /> */}
     <Routes>
      {/* <Switch> */}
        <Route path="/discover" element ={<Discover />} />
        <Route path="/San Diego" element={<SanDiego />}/> 
        <Route path="/FoodDrink" element={<FoodDrink />}/>
        <Route path="/Lifestyle" element={<Lifestyle />}/>
        <Route path="/Destinations" element={<Destinations />}/>
        <Route path="/Sports" element={<Sports />}/>
        <Route path="/People" element={<People />}/>
        <Route path="/ArtCulture" element={<ArtCulture />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element ={<Hero />} />
        <Route path= "/"  element={<Hero/>}/>
     {/* </Switch> */}
     </Routes>
    </Router>
    </ApolloProvider>
  );
}

export default App;