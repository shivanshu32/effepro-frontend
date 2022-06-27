import React from "react";
import VisNetworkNPA from '../components/VisNetworkNPA';
import Navbar from '../components/Navbar'



const NPATaxonomy = props => {
return(
    <div className="">
    <Navbar />
    <VisNetworkNPA stateHandlerNPA={props.stateHandlerNPA} />
    </div>
);
}

export default NPATaxonomy;