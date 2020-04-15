import React from 'react';
//import router components
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import UI components
import Navbar from './components/Navbar';
import About from './components/About';
import Discover from './components/Discover';
import Search from './components/Search';

//import bootstrap stylesheet to make s
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={About} />
          <Route exact path='/discover' component={Discover} />
          <Route exact path='/search' component={Search} />
          <Route render={() => <h1 className='text-center'> Wrong page!</h1>} />
        </Switch>
      </>
    </Router>

  );
}

export default App;

