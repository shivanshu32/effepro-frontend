import React, { useState } from "react";

const SingleRecord = props => {
    const [dropdownStatus, setDropdownStatus] = useState(0);
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
                <button onClick="#" className="mx-2 my-2 flex items-center bg-white rounded border border-gray-300 text-gray-600 pl-3 pr-6 py-2 text-sm">
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
                <button onClick="#" className="mx-2 my-2 flex items-center bg-white rounded border border-gray-300 text-gray-600 pl-3 pr-6 py-2 text-sm">
                    <span className="h-4 w-4 mr-2">
                        <svg xmlns="www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <rect x={3} y={5} width={18} height={14} rx={2} />
                            <polyline points="3 7 12 13 21 7" />
                        </svg>
                    </span>
                    Pdf
                </button>
                {/* Code block for button with icon ends */}

                                    </div>
                                    <div class="">
                                  {/* Code block for white button ends */}
                {/* Code block for button with icon starts */}
                <button onClick="#" className="mx-2 my-2 flex items-center bg-white rounded border border-gray-300 text-gray-600 pl-3 pr-6 py-2 text-sm">
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
    </>
);
}

export default SingleRecord;