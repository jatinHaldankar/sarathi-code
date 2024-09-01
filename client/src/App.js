import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './screens/Home';
import Scheme from './screens/Scheme';
import Ngo from './screens/Ngo';
import Contact from './screens/Contact';
import Signup from './screens/Signup';
import Login from './screens/Login';
import WatchList from './screens/WatchList';

import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const App = () => {
  return <Router>
    <Routes>
      <Route exact path="/" element={<Home />} ></Route>
      <Route exact path="/scheme" element={<Scheme />}></Route>
      <Route exact path='/ngo' element={<Ngo />}></Route>
      <Route exact path='/signup' element={<Signup />}></Route>
      <Route exact path='/login' element={<Login />}></Route>
      <Route exact path='/contact' element={<Contact />}></Route>
      <Route exact path="/watchlist" element={<WatchList />}></Route>

    </Routes>

  </Router>

}

export default App;
