import { Route, Switch } from 'react-router-dom';
import Beers from '../pages/Beers';
import Cocktails from '../pages/Cocktails';
import Details from '../pages/DetailsDrink';
import Home from '../pages/Home';
import Shots from '../pages/Shots';



const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Shots" component= {Shots} />
      <Route path="/Cocktails" component= {Cocktails} />
      <Route path="/Beers" component= {Beers} />
      <Route path="/Details" component= {Details} />
    </Switch>

  );

}


export default Routes;
