
import React from 'react';
import { Container, Content, CustomImg, TextImg } from './styles';


interface IDrink{
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
}

const ListDrinks: React.FC <{drinks: IDrink[]}> = ({drinks}) => {
  return (
    <Container>
    {drinks.length >0 && drinks.map((drink: IDrink) => {
      const {
        idDrink,
        strDrink,
        strDrinkThumb,
      } = drink;


      return (

        <Content onClick={() => console.log(idDrink)} key={idDrink}>
             <TextImg>
            <div>
            {strDrink}
          </div>
            </TextImg>

          <CustomImg
          src={strDrinkThumb}
          alt={strDrink}
              />
          </Content>
      )
    })}
  </Container>
  )
}

export default ListDrinks;
