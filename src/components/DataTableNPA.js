import React, { useState } from "react";
import SingleRecord from "./SingleRecord";
import axios from "axios";

// const baseURL = "http://localhost:4500/products";
const baseURL = "https://effiepro.herokuapp.com/npa";


const DataTableNPA = props => {
    const [post, setPost] = React.useState([]);
React.useEffect(() => {
    axios.get(props.baseURL).then((response) => {
      console.log('hi')
      console.log(typeof(response.data))
      console.log(response.data);
      setPost(response.data);
      
    });




  }, []);

// if (!post) return null;

// const listItems = post.map((thispost) => <li>{thispost['Publication Number']}</li> );

let rowCounter = 1;

    const [dropdownStatus, setDropdownStatus] = useState(0);
    return (
        <div className="">
            <div className="">
                
                <div className="flex flex-col md:flex-row p-3 justify-between items-start md:items-stretch w-full">
                    <div className="w-full md:w-1/2 flex flex-col md:flex-row items-start md:items-center">

                    <div className="flex items-center">
                            <div className="p-2 border-gray-200 text-gray-600 dark:text-gray-400 border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon cursor-pointer icon-tabler icon-tabler-trash" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <line x1={4} y1={7} x2={20} y2={7} />
                                    <line x1={10} y1={11} x2={10} y2={17} />
                                    <line x1={14} y1={11} x2={14} y2={17} />
                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                                </svg>
                            </div>
                            <button className="text-gray-600 dark:text-gray-400 p-2 ml-2 border-gray-200 border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" onClick="#">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-upload" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                    <polyline points="7 9 12 4 17 9" />
                                    <line x1={12} y1={4} x2={12} y2={16} />
                                </svg>
                            </button>
                        </div>

                    <div className="container flex pr-24  items-center justify-end">
                    <label htmlFor="selectedPage1" className="hidden" />
                <input id="selectedPage1" type="text" className="bg-white dark:bg-gray-800 w-12 px-2 mx-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal flex items-center text-xs border-gray-300 dark:border-gray-200 rounded border" defaultValue={77} />
                <p className="-mt-1 text-gray-800 dark:text-gray-100 mr-6 fot-normal text-xs">Total Records</p>


                <button className="text-gray-600 dark:text-gray-400 border-gray-200 border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" onClick="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="15 6 9 12 15 18" />
                    </svg>
                </button>
                <p className="text-gray-800 pl-4 dark:text-gray-100 fot-normal text-xs">Page</p>
                <label htmlFor="selectedPage" className="hidden" />
                <input id="selectedPage" type="text" className="bg-white dark:bg-gray-800 w-6 px-2 mx-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal flex items-center text-xs border-gray-300 dark:border-gray-200 rounded border" defaultValue={1} />
                <p className="text-gray-800 dark:text-gray-100 fot-normal text-xs">of 1</p>
                <button className="text-gray-600 dark:text-gray-400 mx-5 border-gray-200 border rounded focus:outline-none focus:border-gray-800 focus:shadow-outline-gray" onClick="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-right" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <polyline points="9 6 15 12 9 18" />
                    </svg>
                </button>
                <label htmlFor="selectedPage1" className="hidden" />
                <input id="selectedPage1" type="text" className="bg-white dark:bg-gray-800 w-12 px-2 mx-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal flex items-center text-xs border-gray-300 dark:border-gray-200 rounded border" defaultValue={195} />
                <p className="-mt-1 text-gray-800 dark:text-gray-100 fot-normal text-xs">per page</p>
            </div>

                        
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col md:flex-row items-start md:items-center justify-end">
                        
                    <div className="flex flex-col w-full  md:ml-4 mt-3 md:mt-0">
                            <div className="relative w-full">
                                <div className="absolute cursor-pointer text-gray-600 dark:text-gray-400 flex items-center pr-3 right-0 border-l h-full">
                                    <span className="ml-2 mr-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-filter" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <path d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5" />
                                        </svg>
                                    </span>
                                    <span className="text-sm leading-tight tracking-normal">Filter</span>
                                </div>
                                <div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-3 h-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={10} cy={10} r={7} />
                                        <line x1={21} y1={21} x2={15} y2={15} />
                                    </svg>
                                </div>
                                <label htmlFor="search" className="hidden text-gray-800 dark:text-gray-100 text-sm font-bold leading-tight tracking-normal mb-2" />
                                <input id="search" className="w-full bg-transparent dark:bg-gray-800 text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 font-normal pl-8 pr-24 h-10 flex items-center text-sm border-gray-300 dark:border-gray-200 rounded border" placeholder="Search here" />
                            </div>
                        </div>
                    

                        
                        
                    </div>
                </div>
                <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
                    <table className="min-w-full bg-white dark:bg-gray-800 rounded border border-gray-300 dark:border-gray-200" id="main-table">
                        <thead>
                            <tr className="w-full bg-gray-100 border-b border-gray-300 dark:border-gray-200">
                                <th className="pl-3 w-24 py-3">
                                    <div className="flex items-center">
                                        <input type="checkbox" className="cursor-pointer relative w-5 h-5 border rounded border-gray-400 bg-white dark:bg-gray-800 outline-none" onclick="checkAll(this)" />
                                        <div className="opacity-0 cursor-defaut ml-4 text-gray-800 dark:text-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-up" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 15 12 9 18 15" />
                                            </svg>
                                        </div>
                                    </div>
                                </th>
                                <th
                                    className="whitespace-no-wrap w-32 first-dropdown cursor-pointer"
                                    onClick={() => {
                                        dropdownStatus === 0 ? setDropdownStatus(8) : setDropdownStatus(0);
                                    }}
                                >
                                    <div className="flex items-center justify-between relative chuss-div">
                                        <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">S.No.</p>
                                        <div className="cursor-pointer mr-3 text-gray-800 dark:text-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                        {dropdownStatus === 8 && (
                                            <ul className="bg-white dark:bg-gray-800 shadow rounded mt-2 py-1 w-48 absolute top-0 right-0 mt-8 dropdown-content">
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                                            </ul>
                                        )}
                                    </div>
                                </th>
                                <th
                                    onClick={() => {
                                        dropdownStatus === 0 ? setDropdownStatus(9) : setDropdownStatus(0);
                                    }}
                                    className="border-l border-gray-300 dark:border-gray-200 pl-4 whitespace-no-wrap w-32 first-dropdown cursor-pointer"
                                    onclick="dropdownFunction(this)"
                                >
                                    <div className="flex items-center justify-between relative">
                                        <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Title</p>
                                        <div className="cursor-pointer mr-3 text-gray-800 dark:text-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                        {dropdownStatus === 9 && (
                                            <ul className="bg-white dark:bg-gray-800 shadow rounded mt-2 py-1 w-48 absolute top-0 right-0 mt-8 dropdown-content">
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                                            </ul>
                                        )}
                                    </div>
                                </th>
                                <th
                                    onClick={() => {
                                        dropdownStatus === 0 ? setDropdownStatus(10) : setDropdownStatus(0);
                                    }}
                                    className="border-l border-gray-300 dark:border-gray-200 pl-4 whitespace-no-wrap w-32 first-dropdown cursor-pointer"
                                    onclick="dropdownFunction(this)"
                                >
                                    <div className="flex items-center justify-between relative">
                                        <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Publication No.</p>
                                        <div className="cursor-pointer mr-3 text-gray-800 dark:text-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                        {dropdownStatus === 10 && (
                                            <ul className="bg-white dark:bg-gray-800 shadow rounded mt-2 py-1 w-48 absolute top-0 right-0 mt-8 dropdown-content">
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                                            </ul>
                                        )}
                                    </div>
                                </th>
                               
                                <th
                                    onClick={() => {
                                        dropdownStatus === 0 ? setDropdownStatus(12) : setDropdownStatus(0);
                                    }}
                                    className="border-l border-gray-300 dark:border-gray-200 pl-4 whitespace-no-wrap w-32 first-dropdown cursor-pointer"
                                    onclick="dropdownFunction(this)"
                                >
                                    <div className="flex items-center justify-between relative">
                                        <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Assignee</p>
                                        <div className="cursor-pointer mr-3 text-gray-800 dark:text-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                        {dropdownStatus === 12 && (
                                            <ul className="bg-white dark:bg-gray-800 shadow rounded mt-2 py-1 w-48 absolute top-0 right-0 mt-8 dropdown-content">
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                                            </ul>
                                        )}
                                    </div>
                                </th>
                                <th
                                    onClick={() => {
                                        dropdownStatus === 0 ? setDropdownStatus(13) : setDropdownStatus(0);
                                    }}
                                    className="border-l border-gray-300 dark:border-gray-200 pl-4 whitespace-no-wrap w-32 first-dropdown cursor-pointer"
                                    onclick="dropdownFunction(this)"
                                >
                                    <div className="flex items-center justify-between relative ">
                                        <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Uploaded On</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer mr-3 text-gray-800 dark:text-gray-100 icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <polyline points="6 9 12 15 18 9" />
                                        </svg>
                                        {dropdownStatus === 13 && (
                                            <ul className="bg-white dark:bg-gray-800 shadow rounded mt-2 py-1 w-48 absolute top-0 right-0 mt-8 dropdown-content">
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                                            </ul>
                                        )}
                                    </div>
                                </th>
                                <th
                                    onClick={() => {
                                        dropdownStatus === 0 ? setDropdownStatus(14) : setDropdownStatus(0);
                                    }}
                                    className="border-l border-gray-300 dark:border-gray-200 pl-4 whitespace-no-wrap w-32 first-dropdown cursor-pointer"
                                    onclick="dropdownFunction(this)"
                                >
                                    <div className="flex items-center justify-between relative ">
                                        <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Published on</p>
                                        <div className="cursor-pointer mr-3 text-gray-800 dark:text-gray-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <polyline points="6 9 12 15 18 9" />
                                            </svg>
                                        </div>
                                        {dropdownStatus === 14 && (
                                            <ul className="bg-white dark:bg-gray-800 shadow rounded mt-2 py-1 w-48 absolute top-0 right-0 mt-8 dropdown-content">
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 1</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 2</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 3</li>
                                                <li className="cursor-pointer text-gray-600 dark:text-gray-400 text-sm leading-3 tracking-normal py-3 hover:bg-indigo-700 hover:text-white px-3 font-normal">Option 4</li>
                                            </ul>
                                        )}
                                    </div>
                                </th>
                                <th className="border-l border-gray-300 dark:border-gray-200 pl-4 pr-12 whitespace-no-wrap w-32">
                                    <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Actions</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {post.map((thispost, i) => 
                            <SingleRecord patentno={thispost['Publication Number']} 
                            title = {thispost['Title']} 
                            assignee = {thispost['Current Owner']} 
                            publication = {thispost['Publication/Issue Date']}
                            application = {thispost['Filing/Application Date']}
                            legal = {thispost['Legal Status']}
                            inventor = {thispost['Inventors']}
                            extended = {thispost['Extended Family Members']}
                            ipcclass = {thispost['ICR']}
                            cpcclass = {thispost['CPC']}
                            usclass = {thispost['US Class (UC)']}
                            abstract = {thispost['Abstract']}
                            fullclaims = {thispost['Full Claims']}
                            counter = {rowCounter++}
                            
                            />
                            )}

                         {/* {post.map((thispost) =>  {
                             if (thispost === null)
                             {
                                 console.log("this is null")
                             }
                             else{
<SingleRecord patentno={thispost['Publication Number']} />
                             }
                         
                         
                         
                         }
                        
                              )} */}

                            
                           
                           
                            
                        </tbody>
                    </table>
                </div>
            </div>
           
        </div>
    );
};
export default DataTableNPA;
