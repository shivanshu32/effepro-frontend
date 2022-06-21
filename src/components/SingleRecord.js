import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {  useRef } from 'react';
import { Network } from 'vis-network';



const SingleRecord = props => {
    const container = useRef(null);
    const [dropdownStatus, setDropdownStatus] = useState(0);

    const handleAddComment = () => {
        const thisvalue = document.getElementById('addCommentText').value;

        const thistext = '<div class="p-5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900"><div><div class="flex items-center py-5"><div class="ml-2 w-full"><div class="flex items-center justify-between"><h3 class="text-sm text-gray-700 dark:text-gray-100">Demo</h3><p class="text-xs text-gray-600 dark:text-gray-200">Just Now</p></div></div> </div><p class="text-xs leading-snug text-gray-600 dark:text-gray-200">'+ thisvalue +'</p></div></div>'
        
        

        document.getElementById("commentContainer").innerHTML = thistext;

    }

    const popuphandler = (flag) => {
        //alert("popup handler")
        if (flag) {
            document.getElementById("popupContainer").classList.remove("hidden");
        } else {
            document.getElementById("popupContainer").classList.add("hidden");
            
        }
    }

    const popuppdfhandler = (flag) => {
        // alert("popup pdf handler")
        if (flag) {
            document.getElementById("pdfContainer").classList.remove("hidden");
        } else {
            document.getElementById("pdfContainer").classList.add("hidden");
            
        }
    }

    const expandComment = () => {
        popuppdfhandler(true);
    }

    const expandTaxonomy = () => {
        
        popuphandler(true);
        const nodes = [
            { id: 1, label: 'Protein Sweetener', shape: 'diamond', color: '#F03967' },
            { id: 2, label: 'Sweetness Index', shape: 'box', color: '#BACDE1'  },
            { id: 3, label: 'Type of Drink', shape: 'box', color: '#BACDE1'  },
            { id: 4, label: 'Composition Details',shape: 'box', color: '#BACDE1'  },
            { id: 5, label: 'Storage Conditions', shape: 'box', color: '#BACDE1'  },
            { id: 6, label: 'Production Process', shape: 'box', color: '#BACDE1'  },
            { id: 7, label: 'Benefits', shape: 'box', color: '#BACDE1'  }
          ];
          
          
          const edges = [
            { from: 1, to: 2 },
            { from: 1, to: 3 },
            { from: 1, to: 4 },
            { from: 1, to: 5 },
            { from: 1, to: 6 },
            { from: 1, to: 7 },
          
          ];
        
          const options = {
            // position: {x:x, y:x},    // position to animate to (Numbers)
            scale: 2.0,              // scale to animate to  (Number)
            // offset: {x:x, y:y},      // offset from the center in DOM pixels (Numbers)
            animation: {             // animation object, can also be Boolean
              duration: 1000,                 // animation duration in milliseconds (Number)
              easingFunction: "easeInOutQuad" // Animation easing function, available are:
            }                                   // linear, easeInQuad, easeOutQuad, easeInOutQuad,
        }    
          
          const network = container.current && new Network(container.current, { nodes, edges }, options);
          console.log(network)
            
    }

return(
    <>
    <tr className="border-b border-gray-300 dark:border-gray-200">
                                <td className="pl-3 w-24 py-3">
                                    <div className="flex items-center">
                                        <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 outline-none" onclick="tableInteract(this)" />
                                        <button
                                            onClick={() => {
                                                dropdownStatus === 0 ? setDropdownStatus(1) : setDropdownStatus(0);
                                            }}
                                            className=" focus:outline-none cursor-pointer text-gray-800 dark:text-gray-100 ml-2 lg:ml-4 mr-2 sm:mr-0 border border-transparent rounded focus:outline-none"
                                            
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td className="whitespace-no-wrap w-20">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">{props.counter}</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-80">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">{props.title}</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-auto">
                                    <div className="bg-blue-200 h-6 w-32 rounded-md flex items-center justify-center">
                                        <span className="text-xs text-blue-500 font-normal">{props.patentno}</span>
                                    </div>
                                </td>
                                
                                <td className="pl-4 whitespace-no-wrap w-64">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">{props.assignee}</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">{props.application}</p>
                                </td>
                                <td className="pl-4 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">{props.publication}</p>
                                </td>
                                <td class="pl-4 pr-4 whitespace-no-wrap w-80">
                                    <div className="flex">
                                    <div class="relative">
                                          {/* Code block for white button ends */}
                {/* Code block for button with icon starts */}
                <button onClick={expandTaxonomy} className="mx-2 my-2 flex items-center bg-white rounded border border-gray-300 text-gray-600 pl-3 pr-6 py-2 text-sm">
                    <span className="h-4 w-4 mr-2">
                        <svg xmlns="www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x={3} y={5} width={18} height={14} rx={2} />
                            <polyline points="3 7 12 13 21 7" />
                        </svg>
                    </span>
                    Taxonomy
                </button>
                {/* Code block for button with icon ends */}

                
                                      
                                    </div>
                                    <div class="">
                                            {/* Code block for white button ends */}
                {/* Code block for button with icon starts */}
                <a href={"https://www.effepro.com/patentpdf/" + props.patentno + ".pdf"}  target="_blank"  className="mx-2 my-2 flex items-center bg-white rounded border border-gray-300 text-gray-600 pl-3 pr-6 py-2 text-sm">
                    <span className="h-4 w-4 mr-2">
                        <svg xmlns="www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x={3} y={5} width={18} height={14} rx={2} />
                            <polyline points="3 7 12 13 21 7" />
                        </svg>
                    </span>
                   
                    Pdf
                    
                </a>
                {/* Code block for button with icon ends */}

                                    </div>
                                    <div class="">
                                  {/* Code block for white button ends */}
                {/* Code block for button with icon starts */}
                
                <button onClick={expandComment} className="mx-2 my-2 flex items-center bg-white rounded border border-gray-300 text-gray-600 pl-3 pr-6 py-2 text-sm">
                    <span className="h-4 w-4 mr-2">
                        <svg xmlns="www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x={3} y={5} width={18} height={14} rx={2} />
                            <polyline points="3 7 12 13 21 7" />
                        </svg>
                    </span>
                    Comments
                </button>
                
                {/* Code block for button with icon ends */}

                
                                    </div>
                                    </div>
                                </td>
                            </tr>
                            {dropdownStatus === 1 && (
                                <tr className="detail-row">
                                    <td colSpan={9}>
                                        <div className="flex items-stretch w-full border-b border-gray-300 dark:border-gray-200">
                                            <ul>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <button className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" onClick="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-grid" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <rect x={4} y={4} width={6} height={6} rx={1} />
                                                            <rect x={14} y={4} width={6} height={6} rx={1} />
                                                            <rect x={4} y={14} width={6} height={6} rx={1} />
                                                            <rect x={14} y={14} width={6} height={6} rx={1} />
                                                        </svg>
                                                    </button>
                                                </li>
                                                <li autoFocus className="cursor-pointer flex items-center justify-center">
                                                    <button className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none focus:bg-indigo-700 focus:text-white" onClick="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-puzzle" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <path d="M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1" />
                                                        </svg>
                                                    </button>
                                                </li>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <button className="p-3 border text-gray-800 dark:text-gray-100 border-transparent focus:outline-none hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" onClick="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-compass" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="8 16 10 10 16 8 14 14 8 16" />
                                                            <circle cx={12} cy={12} r={9} />
                                                        </svg>
                                                    </button>
                                                </li>
                                                <li className="cursor-pointer text-sm leading-3 tracking-normal flex items-center justify-center">
                                                    <button className="p-3 border text-gray-800 dark:text-gray-100 border-transparent hover:text-indigo-700 focus:bg-indigo-700 focus:text-white" onClick="#">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" />
                                                            <polyline points="7 8 3 12 7 16" />
                                                            <polyline points="17 8 21 12 17 16" />
                                                            <line x1={14} y1={4} x2={10} y2={20} />
                                                        </svg>
                                                    </button>
                                                </li>
                                            </ul>
                                            <div className="w-full bg-white dark:bg-gray-800 border-l border-gray-300 dark:border-gray-200">
                                                <h4 className="pl-10 w-full text-sm text-gray-800 dark:text-gray-100 py-3 bg-gray-100">{props.patentno}</h4>
                                                <div className="bg-white dark:bg-gray-800 px-8 py-6">
                                                    <div className="flex items-start">
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Legal Status</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">{props.legal}</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Inventor</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">{props.inventor}</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">Extended Family Members</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">
                                                       {props.extended}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-start mt-6">
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">ICR Classification</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">
                                                            {props.ipcclass}
                                                            </h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">CPC Classification</p>
                                                            <h5 className="text-gray-800 dark:text-gray-100 font-normal text-xs">{props.cpcclass}</h5>
                                                        </div>
                                                        <div className="w-1/3">
                                                            <p className="text-gray-600 dark:text-gray-400 font-normal text-xs">US Classification</p>
                                                            <h5 className="text-indigo-700 font-normal text-xs">{props.usclass}</h5>
                                                        </div>
                                                    </div>
                                                    <hr className="my-6 border-t border-gray-300 dark:border-gray-200 w-full" />
                                                    <h5 className="text-indigo-700 dark:text-gray-400 text-xs mb-2 font-bold">Abstract</h5>
                                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">{props.abstract}</p>
                                                    <h5 className="text-indigo-700 text-xs mb-2 mt-12 font-bold">Full Claims</h5>
                                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-xs w-3/5 leading-6">{props.fullclaims}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            )}
    
    <div id="popupContainer" className="z-50 fixed w-full hidden flex justify-center inset-0">
                <div onClick={() => popuphandler(false)} className="w-full h-full bg-gray-900 z-0 absolute inset-0" />
                <div className="mx-auto container">
                    <div className="flex items-center justify-center h-full w-full">
                        <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-3/4 ">
                            <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                                <p className="text-base font-semibold">{props.patentno}</p>
                               
                                
                               

                                <button onClick={() => popuphandler(false)} className="focus:outline-none">
                                    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 7L7 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7 7L21 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
                            <div ref={container} style={{ height: '50vh', width: '100%' }} />
                                {/* <MyDocViewer docpdflink={props.pdflink} />

                                <Link to={props.pdflink} target="_blank" download>Download</Link>   */}
                                  
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="pdfContainer" className="z-50 fixed w-full hidden flex justify-center inset-0">
                <div onClick={() => popuppdfhandler(false)} className="w-full h-full bg-gray-900 z-0 absolute inset-0" />
                <div className="mx-auto container">
                    <div className="flex items-center justify-center h-full w-full">
                        <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-3/4 ">
                            <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                                <p className="text-base font-semibold">Comments on {props.patentno}</p>
                               
                                
                               

                                <button onClick={() => popuppdfhandler(false)} className="focus:outline-none">
                                    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 7L7 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7 7L21 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="px-4 md:px-10 pt-6  md:pb-4 pb-7">
                <div id="commentContainer">
                No Comments Found
                </div>
                               

                                {/* test div start */}
                                {/* <div class="p-5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-900">
                <div>
                  <div class="flex items-center py-5">
                
                    <div class="ml-2 w-full">
                      <div class="flex items-center justify-between">
                        <h3 class="text-sm text-gray-700 dark:text-gray-100">Demo</h3>
                        <p class="text-xs text-gray-600 dark:text-gray-200">Just Now</p>
                      </div>
                      
                    </div>
                  </div>
                  <p class="text-xs leading-snug text-gray-600 dark:text-gray-200">Greatest appreciation to you and your team for the outstanding job you did for us. The website is just what we wanted, and we were thrilled with the speed your team exercised. We feel privileged to have eLab communications.</p>
                </div>
              </div> */}
                                {/* test div end  */}

                                {/* input start */}
                                <div class="pt-6 border-gray-300 mt-2 px-7">
    
    <p class="text-base font-semibold leading-4 text-gray-800">Meta Description</p>
    <div class="mt-10 border border-gray-300 rounded">
        <div class="flex flex-wrap items-center px-4 py-3 border-b border-gray-300">
            <div class="flex h-full gap-2 p-2 rounded cursor-pointer hover:bg-blue-50 w-fit">
                <p class="text-sm leading-none text-gray-600">Normal</p> <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.625 4.3125L6 7.6875L9.375 4.3125" stroke="#475569" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </div>
            <div class="flex items-center gap-5 ml-0 lg:ml-7 md:ml-3">
                <button class="p-1 hover:bg-gray-100 focus:bg-gray-100">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.8335 4.99984C5.8335 4.77882 5.92129 4.56686 6.07757 4.41058C6.23385 4.2543 6.44582 4.1665 6.66683 4.1665H10.8335C11.5106 4.16646 12.1716 4.37262 12.7287 4.75753C13.2857 5.14245 13.7123 5.68788 13.9517 6.32123C14.1911 6.95458 14.232 7.64582 14.0688 8.30296C13.9057 8.96011 13.5463 9.55199 13.0385 9.99984C13.5463 10.4477 13.9057 11.0396 14.0688 11.6967C14.232 12.3539 14.1911 13.0451 13.9517 13.6784C13.7123 14.3118 13.2857 14.8572 12.7287 15.2421C12.1716 15.6271 11.5106 15.8332 10.8335 15.8332H6.66683C6.44582 15.8332 6.23385 15.7454 6.07757 15.5891C5.92129 15.4328 5.8335 15.2209 5.8335 14.9998V4.99984ZM10.8335 9.1665C11.2755 9.1665 11.6994 8.99091 12.012 8.67835C12.3246 8.36579 12.5002 7.94187 12.5002 7.49984C12.5002 7.05781 12.3246 6.63389 12.012 6.32133C11.6994 6.00877 11.2755 5.83317 10.8335 5.83317H7.50016V9.1665H10.8335ZM7.50016 10.8332H10.8335C11.2755 10.8332 11.6994 11.0088 12.012 11.3213C12.3246 11.6339 12.5002 12.0578 12.5002 12.4998C12.5002 12.9419 12.3246 13.3658 12.012 13.6783C11.6994 13.9909 11.2755 14.1665 10.8335 14.1665H7.50016V10.8332Z" fill="#475569"></path>
                    </svg>
                </button>
                <button class="p-1 hover:bg-gray-100 focus:bg-gray-100">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.833496 1.00033C0.833496 0.779312 0.921294 0.56735 1.07757 0.41107C1.23385 0.25479 1.44582 0.166992 1.66683 0.166992H8.3335C8.55451 0.166992 8.76647 0.25479 8.92275 0.41107C9.07903 0.56735 9.16683 0.779312 9.16683 1.00033C9.16683 1.22134 9.07903 1.4333 8.92275 1.58958C8.76647 1.74586 8.55451 1.83366 8.3335 1.83366H5.8335V10.167H8.3335C8.55451 10.167 8.76647 10.2548 8.92275 10.4111C9.07903 10.5674 9.16683 10.7793 9.16683 11.0003C9.16683 11.2213 9.07903 11.4333 8.92275 11.5896C8.76647 11.7459 8.55451 11.8337 8.3335 11.8337H1.66683C1.44582 11.8337 1.23385 11.7459 1.07757 11.5896C0.921294 11.4333 0.833496 11.2213 0.833496 11.0003C0.833496 10.7793 0.921294 10.5674 1.07757 10.4111C1.23385 10.2548 1.44582 10.167 1.66683 10.167H4.16683V1.83366H1.66683C1.44582 1.83366 1.23385 1.74586 1.07757 1.58958C0.921294 1.4333 0.833496 1.22134 0.833496 1.00033Z" fill="#475569"></path>
                    </svg>

                </button>
                <button class="p-1 hover:bg-gray-100 focus:bg-gray-100">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 14.5882H15V16H5V14.5882ZM6.85714 12.6824C7.24571 13.054 7.70773 13.3424 8.21429 13.5294C8.78065 13.7606 9.38721 13.8805 10 13.8824C10.6128 13.8805 11.2193 13.7606 11.7857 13.5294C12.2759 13.3298 12.7192 13.0324 13.0879 12.6559C13.4566 12.2794 13.7427 11.8319 13.9286 11.3412C14.1505 10.8025 14.2715 10.2285 14.2857 9.64706V4H12.7143V9.64706C12.7138 10.0563 12.6413 10.4624 12.5 10.8471C12.3974 11.183 12.2274 11.4951 12 11.7647C11.7599 12.0131 11.4672 12.2059 11.1429 12.3294C10.7806 12.4767 10.3916 12.5488 10 12.5412C9.60839 12.5488 9.21938 12.4767 8.85714 12.3294C8.52587 12.1855 8.23258 11.9681 8 11.6941C7.77097 11.4257 7.60072 11.1132 7.5 10.7765C7.36902 10.4135 7.2967 10.0323 7.28571 9.64706V4H5.71429V9.64706C5.70569 10.2241 5.80247 10.798 6 11.3412C6.18927 11.8418 6.48107 12.2984 6.85714 12.6824Z" fill="#475569"></path>
                    </svg>


                </button>
            </div>
            <div class="flex items-center justify-end ml-2 gap-x-3 lg:ml-auto md:ml-auto">
                <p class=" text-sm leading-none text-gray-600 cursor-pointer ">Add Image</p>
                <svg class=" " width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_810_19372)">
                        <path d="M7.5025 6.875C7.5025 7.37228 7.30496 7.84919 6.95333 8.20083C6.6017 8.55246 6.12478 8.75 5.6275 8.75C5.13022 8.75 4.65331 8.55246 4.30168 8.20083C3.95005 7.84919 3.7525 7.37228 3.7525 6.875C3.7525 6.37772 3.95005 5.90081 4.30168 5.54917C4.65331 5.19754 5.13022 5 5.6275 5C6.12478 5 6.6017 5.19754 6.95333 5.54917C7.30496 5.90081 7.5025 6.37772 7.5025 6.875Z" fill="#475569"></path>
                        <path d="M1.875 2.5C1.37772 2.5 0.900805 2.69754 0.549175 3.04917C0.197544 3.40081 0 3.87772 0 4.375L0 15.625C0 16.1223 0.197544 16.5992 0.549175 16.9508C0.900805 17.3025 1.37772 17.5 1.875 17.5H18.125C18.6223 17.5 19.0992 17.3025 19.4508 16.9508C19.8025 16.5992 20 16.1223 20 15.625V4.375C20 3.87772 19.8025 3.40081 19.4508 3.04917C19.0992 2.69754 18.6223 2.5 18.125 2.5H1.875ZM18.125 3.75C18.2908 3.75 18.4497 3.81585 18.5669 3.93306C18.6842 4.05027 18.75 4.20924 18.75 4.375V11.875L14.0312 9.44125C13.914 9.38253 13.7813 9.36216 13.6519 9.38302C13.5224 9.40388 13.4028 9.46492 13.31 9.5575L8.6725 14.195L5.3475 11.98C5.22745 11.9001 5.08345 11.8641 4.93992 11.8783C4.79639 11.8924 4.66217 11.9557 4.56 12.0575L1.2525 15V15.675C1.25101 15.6584 1.25017 15.6417 1.25 15.625V4.375C1.25 4.20924 1.31585 4.05027 1.43306 3.93306C1.55027 3.81585 1.70924 3.75 1.875 3.75H18.125Z" fill="#475569"></path>
                    </g>
                    <defs>
                        <clipPath id="clip0_810_19372">
                            <rect width="20" height="20" fill="white"></rect>
                        </clipPath>
                    </defs>
                </svg>

            </div>
        </div>
        <textarea id="addCommentText" class="resize-none w-full h-[170px] px-4 py-4 text-base outline-none text-slate-600" placeholder="Start typing here ..."> </textarea>
    </div>
</div>

<div class="flex flex-col py-12 flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4">
                        <button class="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px]  w-full ">
                            Reset
                        </button>
                        <button onClick={handleAddComment} class="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full ">
                            Add Comment
                        </button>
                    </div>
                                {/* input end */}


                            {/* <div ref={container} style={{ height: '50vh', width: '100%' }} /> */}
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

export default SingleRecord;