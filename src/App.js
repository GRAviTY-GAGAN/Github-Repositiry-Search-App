import React, {useState} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

//react-router
import {BrowserRouter as Router, Routes, Route, Link, Switch } from 'react-router-dom';

//toast
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import firebase from "firebase/app";
import "firebase/auth"; 

//components
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import PageNotFound from './Pages/PageNotFound';
import Signup from './Pages/Signup';
import { UserContext } from './context/UserContext';
import Footer from './layout/Footer';
import Header from './layout/Header';
import firebaseConfig from './Config/firebaseConfig';

//init firebase
firebase.initializeApp(firebaseConfig);

const App = () => {

const[user, setUser] = useState(null);
// state default value should be null and not empty object otherwise things are not going to be checking properly that if a user is authenticated or not. 

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{user, setUser}}>  
      {/* passing user and setUser so that i can keepon updating values */}
      <Header />
        <Switch>
          <Route exact path='/' component={Home } />
          <Route exact path='/signin' component={Signin } />
          <Route exact path='/signup' component={Signup } />
          <Route exact path='*' component={PageNotFound } />
        </Switch>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
