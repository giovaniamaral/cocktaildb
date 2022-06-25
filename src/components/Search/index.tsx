
import axios from 'axios';
import { useEffect, useState } from 'react';
import ListDrinks from '../ListDrinks';



  const  Search=({value}: any) => {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() =>{
    if (value === '') return;
    axios
    .get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
    .then((results) => results.data)
    .then((data )=> {
     if (data.drinks !== null) setCocktails(data.drinks)
    });
  },[value]);


  return (
    <ListDrinks drinks={cocktails}/>
  )

}

export default Search;
