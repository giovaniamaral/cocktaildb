import React, { useEffect, useState } from 'react';
import { Container ,Content, CustomImg, TextImg} from './styles'


function Random() {
  const [cocktails, setCocktails] = useState([])

  useEffect(() =>{
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')
    .then((results) => results.json())
    .then((data )=> {
      setCocktails(data.drinks)
    });



  },[]);
  return (
    <Container>

      {cocktails.length >0 && cocktails.map((drink) => {
        const {
          idDrink,
          strDrink,
          strCategory,
          strDrinkThumb,
          strInstructions
        } = drink;


        return (

          <Content key={idDrink}>
            <h2>{strDrink}</h2>
            <CustomImg
            src={strDrinkThumb}
            alt={strDrink}
                />

                <TextImg>
              <div>
            <h5>{strCategory}</h5>
            <h6>{strInstructions}</h6>
            </div>
              </TextImg>
            </Content>
        )
      })}

    </Container>
  )

}

export default Random;
