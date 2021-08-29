import React from 'react';
import Navbar from './components/Navbar';
import Current from './components/Current';
import Select from './components/Select';
import Result from './components/Result';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
      
      <Switch>
        <Route path="/" exact>
          <Current/>
        </Route>
        <Route path="/current">
          <Current/>
        </Route>

        <Route path="/history/select">
          <Select/>
        </Route>

        <Route path="/history/result">
          <Result/>
        </Route>

        <Route path="/about">
          <div className='text-center space-y-3'>
            <p className='text-2xl font-semibold'>About me</p>
            <p className='text-xl'>Jongkonrat Pisitnawakun 630610722</p>
          </div>
        </Route>
        </Switch>
    </Router>
  );
}

export default App;