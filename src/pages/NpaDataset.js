import React from "react";
import DataTableNPA from "../components/DataTableNPA";

const NpaDataset = () => {
  
    
return(
    <div>
      
      <DataTableNPA baseURL="https://effiepro.herokuapp.com/npa" />
    </div>
    
);
}

export default NpaDataset;