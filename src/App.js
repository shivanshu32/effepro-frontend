import './App.css';
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
// import CardHome from './components/CardHome';
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
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
    <Routes>
    
    
    <Route exact path="/" element={<Dashboard />} />
    {/* <Dashboard /> */}
    {/* </Route> */}
    <Route path="/taxonomy" exact element={<Taxonomy />} />
      {/* <Taxonomy />
    </Route> */}
    <Route path="/dataset" exact element={<Dataset />} />
      {/* <Dataset />
    </Route> */}
    <Route path="/NPAtaxonomy" exact element={<NPATaxonomy />} />
      {/* <NPATaxonomy />
    </Route> */}
    <Route path="/NPAdataset" exact element={<NPADataset />} />
      {/* <NPADataset />
    </Route> */}
    </Routes>
   
  </Router>
  )
}



export default App;


