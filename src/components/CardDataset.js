import React from "react";
// import {Link} from 'react-router-dom';
// import ObjectiveWidget from "./widgets/ObjectiveWidget";
// import ProposedStrategy from "./widgets/ProposedStrategy";
// import RankingWidget from "./widgets/RankingWidget";


// import MyDocViewer from "./MyDocViewer";
import './CardHome.css';






export default function CardDataset(props) {


    let thisPropTitle = props.title;
    thisPropTitle = thisPropTitle.replace(/\s/g, "");

    const thisPopupId = "popup-" + thisPropTitle;

    // alert(thisPopupId);

    const popuphandler = (flag, thisid) => {
        //alert("popup handler")
        if (flag) {
            document.getElementById(thisid).classList.remove("hidden");
        } else {
            document.getElementById(thisid).classList.add("hidden");
            
        }
    }

    

    

    return (
        
        <>
       
       
        

        <div id={thisPopupId} className="z-50 fixed w-full hidden flex justify-center inset-0">
                <div onClick={() => popuphandler(false,thisPopupId)} className="w-full h-full bg-gray-900 z-0 absolute inset-0" />
                <div className="mx-auto container">
                    <div className="flex items-center justify-center h-full w-full">
                        <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-3/4 ">
                            <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                                <p className="text-base font-semibold">{props.title}</p>
                               
                                
                               

                                <button onClick={() => popuphandler(false,thisPopupId)} className="focus:outline-none">
                                    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 7L7 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7 7L21 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
                           thisdata
                                {/* <MyDocViewer docpdflink={props.pdflink} />

                                <Link to={props.pdflink} target="_blank" download>Download</Link>   */}
                                  
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    
    </>
    );
}


