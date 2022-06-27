import React from "react";
import DataTableNPA from "../components/DataTableNPA";
import Navbar from '../components/Navbar'

const NpaDataset = props => {
  
    
return(
  <>
  <Navbar />
    <div>
      
      <DataTableNPA npataxonomyFilter={props.npataxonomyFilter} nonpatentDataset={props.nonpatentDataset} baseURL="https://effiepro.herokuapp.com/npa" />
    </div>
    </>
    
);
}

export default NpaDataset;