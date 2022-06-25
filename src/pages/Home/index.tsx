import React, { useState } from 'react';
import Juice from '../../assets/juice.svg';
import LogoImg from '../../assets/logo.svg';
import Search from '../../components/Search/index';
import SearchInput from '../../components/SearchInput';
import { Header, Main, Welcome } from './styles';




const Home: React.FC = (IDrink) => {
  const [value, setValue] = useState<String>('');





   return (

    <>
    <div>

    </div>
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
         <h1>Welcome to be CocktailDB</h1>
         <img src={Juice} alt="JuiceDrink" />
       </Welcome>
       <SearchInput
       value={value}
       setValue={setValue}
       />
         <Main>
           <Search
           value={value}
          />

         </Main>

       </>

   )
};
export default Home;


