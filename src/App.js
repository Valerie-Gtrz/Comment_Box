import './App.css';
import Home from './Home';
import { Route, Switch } from 'react-router-dom';
import ThankYou from './ThankYou';


function App() {
return (
  <>
  <Switch>
  <Route exact path= '/'>
  <Home />
  </Route>
  <Route path= '/thankyou'>
  <ThankYou />
  </Route>
  </Switch>
  </>
)
}

export default App;
