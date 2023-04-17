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
import SanDiego from './components/pages/San Diego'; 
import FoodDrink from './components/pages/FoodDrink';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';

import Destinations from './components/pages/Destinations';
import Sports from './components/pages/Sports';
import People from './components/pages/People';
import ArtCulture from './components/pages/ArtCulture'; 
import Discover from './components/pages/Discover'; 
// imports for admin page
import AdminNav from "./componentsAdmin/adminNav";
import AdminAside from "./componentsAdmin/adminAside";
import AdminHome from "./pagesAdmin/AdminHome";
import Categories from './pagesAdmin/Categories';
import Posts from './pagesAdmin/Posts';
import AdminFooter from "./componentsAdmin/adminFooter";
import Subscribers from './pagesAdmin/Subscribers';
import Media from './pagesAdmin/Media';
import Account from './pagesAdmin/Account';
import AuthService from './utils/auth';
import Singleblog from './components/pages/Blog';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});
//Construct request middleware that will attach the JWT token to every request as an `authorization` header
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
  // let { isloggedin } = this.state
  if(AuthService.loggedIn()) {
    console.log("logintest",AuthService.loggedIn())
    console.log("Getprofile",AuthService.getProfile())
  return (
      <ApolloProvider client={client}>
      <Router>
      <AdminNav />
      <div className="grid grid-cols-12 min-h-screen">
          <div className="col-span-3 bg-mainWhite border-b">
            <AdminAside />
          </div>
        <div className="col-span-9 bg-mainBlue min-h-screen max-w-screen">
            <Routes>
              <Route path="/Posts" element={<Posts />}/>
              <Route path="/Categories" element={<Categories />}/>
              <Route path="/Media" element={<Media />}/>
              <Route path="/Subscribers" element={<Subscribers />}/>
              <Route path="/Account" element={<Account />}/>
              <Route path="/AdminHome" element={<AdminHome />}/>
              <Route path="/login" element={<Login />}/>
            </Routes>
        </div>
      </div>
      <AdminFooter />
      </Router>
     </ApolloProvider>
    )} else {
      console.log("NOT loggged in?", AuthService.loggedIn.token)
      return (
      <ApolloProvider client={client}>
      <Router>
      <Navbar />
      <Routes>
           <Route path="/discover" element ={<Discover />} />
           <Route path="/San Diego" element={<SanDiego />}/> 
           <Route path="/FoodDrink" element={<FoodDrink />}/>
           <Route path="/Destinations" element={<Destinations />}/>
           <Route path="/Sports" element={<Sports />}/>
           <Route path="/People" element={<People />}/>
           <Route path="/ArtCulture" element={<ArtCulture />}/>
           <Route path="/signup" element={<Signup />}/>
           <Route path="/login" element={<Login />}/>
           <Route path="/home" element ={<Hero />} />
           <Route path= "/"  element={<Hero/>}/>
           <Route path="/blogs/:blogId" element={<Singleblog />}/>
        </Routes>
      </Router >
      </ApolloProvider>
    )};
};

export default App;