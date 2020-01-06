import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/main';
import SignIn from './components/signin';
import Dashboard from './components/dashboard';
import Footer from './components/footer';
import NotFound from './components/notfound';

// const backendPort = process.env.REACT_APP_BACKEND_PORT;
// console.log(`backendPort = ${backendPort}`);

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/dashboard" exact render={() => <Dashboard />} />
        <Route path="/signin" render={() => <SignIn />} />
        <Route component={NotFound} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
