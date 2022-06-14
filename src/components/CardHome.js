import React from "react";
import ObjectiveWidget from "./widgets/ObjectiveWidget";
import ProposedStrategy from "./widgets/ProposedStrategy";
import RankingWidget from "./widgets/RankingWidget";
import Solution1 from "./widgets/Solution1"
import Solution2 from "./widgets/Solution2"
import Solution3 from "./widgets/Solution3"
import Solution4 from "./widgets/Solution4"
import Solution5 from "./widgets/Solution5"
import Solution6 from "./widgets/Solution6"
import Solution7 from "./widgets/Solution7"
import Solution8 from "./widgets/Solution8"
import Swal from 'sweetalert2'
import MyDocViewer from "./MyDocViewer";
import './CardHome.css';






export default function CardHome(props) {


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
       
       <div class="max-w-sm rounded overflow-hidden relative bg-white p-6 dark:bg-gray-800">
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <p tabindex="0" class="focus:outline-none mr-3 text-xl font-semibold leading-5 text-gray-800 dark:text-gray-100">{props.title}</p>
                    {/* <div class="w-7 h-7 flex items-center justify-center bg-red-500 rounded-full">
                        <p tabindex="0" class="focus:outline-none text-base font-semibold leading-5 md:leading-10 text-white">8</p>
                    </div> */}
                </div> 
                <svg xmlns="http://www.w3.org/2000/svg" role="button" tabindex="0" class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none w-6 md:w-auto dark:text-gray-100 cursor-pointer icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <polyline points="6 9 12 15 18 9" />
                </svg>
            </div>
            <div class="bg-gray-100 dark:bg-gray-900 rounded w-full mt-6 p-6 mb-5">
                <div class="flex items-start justify-between">
                    <div class="sm:flex items-center">
                        {/* <div class="relative">
                            <img tabindex="0" class="focus:outline-none w-12" src="https://i.ibb.co/WnVgd7B/DP.png" alt="man avatar" srcset="" />
                        </div> */}
                        {/* <div class="sm:ml-4 mt-4 sm:mt-0">
                            <p tabindex="0" class="focus:outline-none text-xl font-semibold leading-4 text-gray-800 dark:text-gray-100">Drake Connor</p>
                            <p tabindex="0" class="focus:outline-none text-sm leading-6 pt-1 text-gray-600 dark:text-gray-400">Oct 12 • 5 mins read</p>
                        </div> */}
                    </div>
                        {/* <img class="focus:outline-none ml-4 text-gray-600 w-8 sm:w-auto cursor-pointer" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/card80-svg1.svg" alt="like"/>
                        */}
                </div>
              
                {props.title === "Objective" && <ObjectiveWidget /> }
                {props.title === "Proposed Strategy" && <ProposedStrategy /> }
                {props.title === "Ranking Framework" && <RankingWidget /> }
                {props.title === "Solutions on Brazzein" && <Solution1 /> }
                {props.title === "Solutions on Monellin" && <Solution2 /> }
                {props.title === "Solutions on Thaumatin" && <Solution3 /> }
                {props.title === "Solutions on Curculin" && <Solution4 /> }
                {props.title === "Solutions on Miraculin" && <Solution5 /> }
                {props.title === "Solutions on Mabinlin" && <Solution6 /> }
                {props.title === "Solutions on New Protein Sweetner Napin" && <Solution7 /> }
                {props.title === "Composition" && <Solution8 /> }
                
      
                
            </div>
            <div class="flex items-stretch justify-center">
                {/* <button aria-label="back" class="focus:ring-2 focus:ring-indigo-600 focus:outline-none w-20 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 rounded flex items-center justify-center">
                    <img class="cursor-pointer text-indigo-700 dark:text-indigo-600 " src="https://tuk-cdn.s3.amazonaws.com/can-uploader/card80-svg2.svg" alt="back arrow"/>
                   
                </button> */}
                <button onClick={() => popuphandler(true,thisPopupId)} class="focus:ring-2 w-full focus:ring-offset-2 focus:ring-indigo-600 focus:outline-none dark:bg-indigo-600 dark:hover:bg-indigo-700 bg-indigo-700 hover:bg-indigo-600 rounded text-sm font-semibold leading-4 text-center text-white py-4 px-2 sm:px-16">Learn More</button>
            </div>
        </div>
        

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
                                
                                <MyDocViewer docpdflink={props.pdflink} />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    
    </>
    );
}


