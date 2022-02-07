
import react from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Suggestions from './components/pages/Suggestions';
import Modal from './components/Modal';
function App() {
  return (
   <>
   <Router>
     <Navbar />
     <Switch>
       <Route path='/' exact component = {Home}/>
       <Route path='/suggested' exact component = {Suggestions}/>
       <Route path='/modalBackground' exact component = {Modal}/>
     </Switch>
     </Router>
 </>
  );
}

export default App;
