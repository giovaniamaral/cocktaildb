import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LogoImg from '../../assets/logo.svg';
import ListDrinks from '../../components/ListDrinks';
import { Header, Main, Welcome } from './styles';




const Shots: React.FC = ({value}: any) => {

  const [cocktails, setCocktails] = useState([]);
  useEffect(() =>{
    if (value === '') return;
    axios
    .get(`https://thecocktaildb.com/api/json/v1/1/filter.php?c=Shot`)
    .then((results) => results.data)
    .then((data )=> {
     if (data.drinks !== null) setCocktails(data.drinks)
    });
  },[value]);



   return (
    <>
    <Header>
       <img src={LogoImg} alt="CocktailDB" />
       <div>
         <a href="Home">Home</a>
         <a href="Shots">Shots</a>
         <a href="Cocktails">Cocktails</a>
         <a href="Beers">Beers</a>
       </div>
     </Header>
     <Welcome>
       </Welcome>
         <Main>
         <ListDrinks drinks={cocktails}/>
         </Main>
       </>

   )
};
export default Shots;


