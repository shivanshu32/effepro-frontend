
// import React, { useContext, useState } from "react";
import DataTable from "../components/DataTable";
import Navbar from '../components/Navbar'
// import { UserContext } from "../App";

const Dataset = props => {
  // const thisHandler = () => {
  //   props.stateHandler
  // props.addnewState("https://effiepro.herokuapp.com/pa");

  // }
//alert(props.thisbaseURL)

  // const paURL = useContext(UserContext);  
  
   // alert(paURL);
    // console.log(npaURL);
  
  

return(
  <>
  <Navbar />
  <div>
      {/* <h1>{post[0]['Publication Number']}</h1> */}
      
      
     {/* {post.map((thispost) => <li>{thispost['Publication Number']}</li> )} */}
      {/* <p>{post.body}</p> */}
      <DataTable pataxonomyFilter={props.pataxonomyFilter} patentDataset={props.patentDataset} baseURL={props.thisbaseURL} addnewState={props.addnewState} />
    </div>
  </>
    
    
);
}

export default Dataset;