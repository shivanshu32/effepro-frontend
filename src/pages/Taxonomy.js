import React from "react";
import VisNetwork from '../components/VisNetwork';
import Navbar from '../components/Navbar'


const Taxonomy = props => {
    
return(
    <div className="">
    <Navbar />
    <VisNetwork addnewState={props.addnewState} />
    </div>
);
}

export default Taxonomy;