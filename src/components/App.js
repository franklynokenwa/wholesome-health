import '../css/App.css';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Services from '../pages/Services';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';
import UserDashBoard from './UserDashBoard';

import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
    <Switch>
      <Route path={`/`} exact>
        <Home/>
      </Route>

      <Route path={`/about`}>
        <AboutUs/>
      </Route>

      <Route path={`/contact`}>
        <Contact/>
      </Route>

      <Route path={`/services`}>
        <Services/>
      </Route>

      <Route path={`/signup`}>
        <SignUp/>
      </Route>

      <Route path={`/login`}>
        <LogIn/>
      </Route>

      <Route path={`/dashboard`}>
        <UserDashBoard/>
      </Route>

    </Switch>
  </Router>

  );
}

export default App;
