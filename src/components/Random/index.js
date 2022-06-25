import React, { useEffect, useState } from "react";

function Random() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetch(`https://thecocktaildb.com/api/json/v1/1/random.php`)
      .then(results => results.json())
      .then(data => {
        setCocktails(data.drinks);
      });
  }, []);
  return (
    <Container>
      {cocktails.length > 0 &&
        drinks.map(drink => {
          const { idDrink, strDrink, strDrinkThumb } = drink;

          return (
            <Content onClick={() => console.log(idDrink)} key={idDrink}>
              <TextImg>
                <div>{strDrink}</div>
              </TextImg>

              <CustomImg src={strDrinkThumb} alt={strDrink} />
            </Content>
          );
        })}
    </Container>
  );
}

export default Random;
