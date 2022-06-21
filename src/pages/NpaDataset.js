import React from "react";
import DataTableNPA from "../components/DataTableNPA";
import Navbar from '../components/Navbar'

const NpaDataset = () => {
  
    
return(
  <>
  <Navbar />
    <div>
      
      <DataTableNPA baseURL="https://effiepro.herokuapp.com/npa" />
    </div>
    </>
    
);
}

export default NpaDataset;