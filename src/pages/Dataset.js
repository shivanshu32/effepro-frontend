import React from "react";

import DataTable from "../components/DataTable";

const Dataset = () => {
  
    
return(
    <div>
      {/* <h1>{post[0]['Publication Number']}</h1> */}
      
      
     {/* {post.map((thispost) => <li>{thispost['Publication Number']}</li> )} */}
      {/* <p>{post.body}</p> */}
      <DataTable baseURL="https://effiepro.herokuapp.com/" />
    </div>
    
);
}

export default Dataset;