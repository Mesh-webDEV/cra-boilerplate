import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import Join from './Pages/Join';

// Global components
import Toast from '../Global/Toast';

const App = () => {
  return (
    <div className='relative w-screen min-h-screen overflow-y-scroll overflow-x-hidden dark:bg-dark-background'>
      <Toast />
      <Switch>
        <Route path='/Join'>
          <Join />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
