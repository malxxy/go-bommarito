// import React, { useState } from 'react';
// import Navigation from './Navigation';
// // import Categories from './pages/Categories';
// // import Discover from './pages/Discover';
// import Login from './pages/Login';
// import Media from './pages/Media';
// import Signup from './pages/Signup';
// import Hero from './hero';

// export default function Header() {
//   const [currentPage, setCurrentPage] = useState('Home');
  
//   const renderPage = () => {
//     if (currentPage === 'Login') {
//       return <Login />;
//     }
//     if (currentPage === 'Media') {
//       return <Media />;
//     }
//     if (currentPage === 'Signup') {
//       return <Signup />;
//     }
//     return <Hero />;
//   };

//   const handlePageChange = (page) => setCurrentPage(page);
  
//   return (
//     <div>
//       <div id="top"></div>
//       <h1 id="name">Blog</h1>
//       <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
//       {renderPage()}
//     </div>
//   );
// }
