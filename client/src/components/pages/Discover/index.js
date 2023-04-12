import React from "react";
import styled from "styled-components";
import { useQuery } from '@apollo/client';

import BlogList from '../../BlogList';

import { QUERY_BLOGS } from '../../../utils/queries';

const Main = styled.main`
background: linear-gradient(to right, rgba(255,0,0,0), rgb(173, 216, 230));
`
const Content = styled.div``
const Title = styled.h1`
display: flex;
flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 20px;
 color: grey;`
const Desc = styled.p`
  font-size: 24px;
  font-weight: 200;
  line-height: 1.5;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 150px;
  padding-left: 150px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    }
`
const About = styled.p`
font-size: 24px;
  font-weight: 200;
  line-height: 1.5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 150px;
  `
  const Aside = styled.p`
  font-size: 24px;
  font-weight: 200;
  line-height: 1.5;
  position: relative;
  top: -300px;
  padding-right: 800px;
  `

const Img = styled.img`
    width: 120rem;
    height: 30rem;
    border-radius: 17px;
    position: relative;
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
        }`

        const Image = styled.img`
        width: 35%;
        height: 30%;
        border-radius: 17px;
        position: relative;
        right: 10%;
       `
       const Images = styled.img`
        width: 40%;
        height: 30%;
        border-radius: 17px;
        position: relative;
        left: 30%;
        top: 150px;
       `
        const Footer = styled.footer`
        border: 1px solid black;
        border-radius: 17px;
        width: 170vh;
        font-size: 24px;
        font-weight: 200;
        line-height: 1.5;
        color: white;
        background-color: #333;
        text-align: center;
        `


const Discover = () => {

    const { loading, data } = useQuery(QUERY_BLOGS);
    const blogs = data?.blogs || [];
        
    return (
        <Main>
      
              <div className="flex-row justify-center">
                <div className="col-12 col-md-10 my-3">
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    <BlogList
                      blogs={blogs}
                      title="Here's the current roster of friends..."
                    />
                  )}
                </div>
              </div>

        <Img src="../italy1.jpg" alt="stock image"/>
  <Content>
      <Title>
          <h1>The History of La Ripolina</h1>
           <Desc>
      <p> from 1966
Until the 1960s, the lands on which Ripolina extends were part of a large La Piana estate belonging to the noble Roman family Ceriana Maineri Lante della Rovere.
 
The brothers Enzo and Italo Cresti bought in 1966 “a piece” of that land of Piana which today has become La Ripolina. At first, in addition to the cultivation of cereals, pig breeding was also practiced, which was then abandoned.
Subsequently various hectares of vineyards were planted, mainly white: pinot, trebbiano and malvasia, grapes that produced a particularly appreciated wine. In fact, it is said that in past centuries the lands around the Pieve di Piana had supplied moscatello wine to the bishop’s table in Siena. 2 artificial lakes were built for the irrigation of crops which, like maize, required a lot of water that was lacking in these clayey soils in summer.
Upon Italo’s untimely death, Enzo found himself managing the company alone, a dream of both brothers. With the passing of the years and the coming of age of Italo’s 3 children, the hereditary division attributed this company to Enzo who carried it on together with his wife Nella and daughter Laura. In 1992 another era began, that of the agritourism. A period that allowed to recover one at a time all the real estate assets that over the years were going to ruin. Since 2012 La Ripolina has become an essentially cereal organic company. The vineyard, reduced to a few hectares, is cultivated with merlot and sangiovese. Over the years, the farm has grown in popularity, welcoming thousands of guests from all over the world. The management of the company is today entrusted to Laura and her daughters Margherita and Camilla who continue the work of Enzo and Nella with dedication and an innovative spirit.

</p>
               <About>
              <Image src="../Italy.jpg" alt="stock image"/>
              <p>La Ripolina is located in the heart of Tuscany between the Crete Senesi and Val' d'Orcia. 25 km far rom Siena near Montalcino, the land of Brunello wine. It is surrounded by 43 hectares of land, where vines and cereals are grown.

The gentle hills that make this landscape unique and turning with seasons, combined with a place rich in history, with its ancient stone and red brick walls, make it the ideal destination for mental and physical well-being. The large pool with solarium, ping pong, mountain bikes, children’s playground, paths, silence and pure air bring relax to your stay. There are also common BBQ, laundry, and some facilities equipped to be able to eat outdoors.
 </p>
            </About>
            <Images src="../italy2.jpg" alt="stock image"/>
            <Aside>
              <p>
              Rooms and apartments
Our comfortable accommodations are part of an ancient structure made up of several farmhouses and a Fortified Parish Church dating back to the early years of the 1000th century.
All the rooms are expertly restored immersed in the tranquility of the Sienese hills.
For our guests we offer large equipped outdoor areas, access to the swimming pool, mountain bikes, table tennis, restaurant on request and many other activities.

              </p>
            </Aside>
            <Footer> 
            <p>© 2023 GoBommarito. All rights reserved.</p>
            </Footer>
         </Desc>
      </Title>
  </Content>
 </Main>
);

// import React from 'react';
// import { useQuery } from '@apollo/client';

// import BlogList from '../../BlogList';

// import { QUERY_BLOGS } from '../../../utils/queries';

// const Discover = () => {
//   const { loading, data } = useQuery(QUERY_BLOGS);
//   const blogs = data?.blogs || [];

//   return (
//     <main>
//       <div className="flex-row justify-center">
//         <div className="col-12 col-md-10 my-3">
//           {loading ? (
//             <div>Loading...</div>
//           ) : (
//             <BlogList
//               blogs={blogs}
//               title="Here's the current roster of friends..."
//             />
//           )}
//         </div>
//       </div>
//     </main>
//   );
// };
    
    }

export default Discover;
