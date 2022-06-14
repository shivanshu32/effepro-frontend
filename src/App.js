import './App.css';
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
// import CardHome from './components/CardHome';
import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Taxonomy from './pages/Taxonomy'
import NPATaxonomy from './pages/NpaTaxonomy';
import NPADataset from './pages/NpaDataset';
import Dataset from './pages/Dataset'


 


const App = () => {
  
  return (
  //  <>
  //  {/* <Navbar />
  //  <Dashboard /> */}
 
   
  //  </>
  <Router>
    <Navbar />
    <Switch>
    <Route path="/" exact>
    <Dashboard />
    </Route>
    <Route path="/taxonomy" exact>
      <Taxonomy />
    </Route>
    <Route path="/dataset" exact>
      <Dataset />
    </Route>
    <Route path="/NPAtaxonomy" exact>
      <NPATaxonomy />
    </Route>
    <Route path="/NPAdataset" exact>
      <NPADataset />
    </Route>
    </Switch>
  </Router>
  )
}



export default App;


