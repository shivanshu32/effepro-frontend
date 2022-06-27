import './App.css';


import Dashboard from './pages/Dashboard'
// import CardHome from './components/CardHome';
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Taxonomy from './pages/Taxonomy'
import NPATaxonomy from './pages/NpaTaxonomy';
import NPADataset from './pages/NpaDataset';
import Dataset from './pages/Dataset'
import Login from './pages/Login';
import axios from "axios";
import { useState } from "react";

// export const UserContext = React.createContext();


const App = () => {

const [mainBaseURLPA, setMainBaseUrlPA] = useState("https://effiepro.herokuapp.com/pa");
const [patentDataset, setpatentDataset] = useState(0);
const [nonpatentDataset, setnonpatentDataset] = useState(0);
const [pataxonomyFilter, setpataxonomyFilter] = useState(0);
const [npataxonomyFilter, setnpataxonomyFilter] = useState(0);
// const [npataxonomyFilter, setnpataxonomyFilter] = useState(0);

React.useEffect(() => {

  axios.get("https://effiepro.herokuapp.com/pa").then((response) => {
    console.log('patent data loaded')
    console.log(response.data);
    setpatentDataset(response.data);
    });
    axios.get("https://effiepro.herokuapp.com/npa").then((response) => {
      console.log('npa patent data loaded')
      console.log(response.data);
      setnonpatentDataset(response.data);
      });

}, []);


const stateHandler = newState =>
{
  //console.log(mainBaseURLPA);
  //alert(newState)
  setMainBaseUrlPA(newState)
}

const stateHandlerPA = newState =>
{
  //console.log(mainBaseURLPA);
  //alert(newState)
  setpataxonomyFilter(newState)
}

const stateHandlerNPA = newState =>
{
  //console.log(mainBaseURLPA);
  //alert(newState)
  setnpataxonomyFilter(newState)
}
  
   
// const [mainBaseURLNPA, setMainBaseUrlNPA] = useState("https://effiepro.herokuapp.com/npa");

  return (
  //  <>
  //  {/* <Navbar />
  //  <Dashboard /> */}
 
   
  //  </>
  <Router>
      {/* <UserContext.Provider value={mainBaseURLPA}> */}
   
    <Routes>
    <Route exact path="/dashboard" element={<Dashboard />} />
   
    <Route exact path="/" element={<Login />} />

   
    {/* <Dashboard /> */}
    {/* </Route> */}
    <Route path="/taxonomy" exact element={<Taxonomy stateHandlerPA={stateHandlerPA} addnewState={stateHandler}  />} />
      {/* <Taxonomy />
    </Route> */}
    <Route path="/dataset" exact element={<Dataset pataxonomyFilter={pataxonomyFilter}  patentDataset={patentDataset} addnewState={stateHandler} thisbaseURL={mainBaseURLPA} />} />
      {/* <Dataset />
    </Route> */}
    <Route path="/NPAtaxonomy" exact element={<NPATaxonomy stateHandlerNPA={stateHandlerNPA} />} />
      {/* <NPATaxonomy />
    </Route> */}
    <Route path="/NPAdataset" exact element={<NPADataset npataxonomyFilter={npataxonomyFilter} nonpatentDataset={nonpatentDataset} />} />
      {/* <NPADataset />
    </Route> */}
    </Routes>
    {/* </UserContext.Provider> */}
  </Router>
  )
}



export default App;


