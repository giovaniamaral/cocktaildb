import React from 'react';
import LogoImg from '../../assets/logo.svg';
import { Header, Main, Welcome } from './styles';




const Details: React.FC = () => {

   return (
    <>
    <Header>
       <img src={LogoImg} alt="CocktailDB" />
       <div>
         <a href="/">Home</a>
         <a href="Shots">Shots</a>
         <a href="Cocktails">Cocktails</a>
         <a href="Beers">Beers</a>
       </div>
     </Header>
     <Welcome>
       </Welcome>
         <Main>

               <h1>Ingredients</h1>
                <img src="https://www.thecocktaildb.com/images/ingredients/Vodka-Medium.png"/>
                <img src="https://www.thecocktaildb.com/images/ingredients/Light%20rum-Medium.png"/>
                <img src="https://www.thecocktaildb.com/images/ingredients/Gin-Medium.png"/>
                <img src="https://www.thecocktaildb.com/images/ingredients/Tequila-Medium.png"/>

                <h2>Instructions</h2>
                <p>Combine all ingredients (except cola) and pour over ice in a highball glass.
                Add the splash of cola for color.
                Decorate with a slice of lemon and serve.
                Glass</p>



                <div>
                  <img className="Drink" src="https://www.thecocktaildb.com/images/media/drink/nkwr4c1606770558.jpg"/>
                </div>
         </Main>
       </>

   )
};
export default Details;
