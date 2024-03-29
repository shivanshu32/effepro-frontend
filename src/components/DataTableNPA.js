import React, { useState } from "react";
import SingleRecordNPA from "./SingleRecordNPA";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

// const baseURL = "http://localhost:4500/products";
// const baseURL = "https://effiepro.herokuapp.com/npa";


const DataTableNPA = props => {
    
    const [post, setPost] = React.useState(props.nonpatentDataset);
    const [isLoading, setIsLoading] = useState(false);

    React.useEffect(() => {
        if(props.npataxonomyFilter !== 0)
        {
            let thisURL = "https://effiepro.herokuapp.com/npa/" + props.npataxonomyFilter
            //alert(thisURL)
            setIsLoading(true);
            axios.get(thisURL).then((response) => {
                      //console.log('hi')
                      //console.log(response.data);
                      let thisresponse = response.data
                      thisresponse = thisresponse.replace("NaN", '"NA"');
                      thisresponse = thisresponse.replace("\\", '""');
                      
                      thisresponse = JSON.parse(thisresponse);
                      
                      //thisresponse = thisresponse.slice(1,thisresponse.length - 1)
                      console.log("this response is")
                      console.log(typeof(thisresponse))
                      console.log(thisresponse)
    
                      setPost(thisresponse);
                      setIsLoading(false);
                      
                    });
        }
    
      },[props.npataxonomyFilter]);


    const searchKeyword = () => {
        const thisKeyword = (document.getElementById("searchbox").value).toLowerCase();
        // thisKeyword = thisKeyword.toLowerCase();
        setIsLoading(true);
        let newArray = [];
        //alert(thisKeyword)
        //alert(typeof(post))
        const tempArray = post.map((thispost,i) => {
            
            const patentno=thispost['Abstract'];
            const title = thispost['Title'];
            const assignee = thispost['Relevant text'];
            const publication = thispost['Literature Focus'];
            const application = thispost['Affiliation'];
            const legal = thispost['Author'];
            const inventor = thispost['Publication year'];
            // const extended = thispost['Extended Family Members'];
            // const ipcclass = thispost['ICR'];
            // const cpcclass = thispost['CPC'];
            // const usclass = thispost['US Class (UC)'];
            // const abstract = thispost['Abstract'];
            // const fullclaims = thispost['Full Claims'];

            let needleFind = 0;

            if(patentno !== undefined && patentno.toLowerCase().includes(thisKeyword)) { needleFind = 1 }
            if(title !== undefined && title.toLowerCase().includes(thisKeyword)) { needleFind = 1 }
            if(assignee !== undefined && assignee.toLowerCase().includes(thisKeyword)) { needleFind = 1 }
            if(publication !== undefined && publication.toLowerCase().includes(thisKeyword)) { needleFind = 1 }
            if(application !== undefined && application.toLowerCase().includes(thisKeyword)) { needleFind = 1 }
            if(legal !== undefined && legal.toLowerCase().includes(thisKeyword)) { needleFind = 1 }
            if(inventor !== undefined && inventor === parseInt(thisKeyword) ) { needleFind = 1 }
            
            // if(extended !== undefined && extended.toLowerCase().includes(thisKeyword)) { needleFind = 1 }
            // if(ipcclass !== undefined && ipcclass.toLowerCase().includes(thisKeyword)) { needleFind = 1 }
            // if(cpcclass !== undefined && cpcclass.toLowerCase().includes(thisKeyword)) { needleFind = 1 }
            // if(usclass !== undefined && usclass.toLowerCase().includes(thisKeyword)) { needleFind = 1 }
            // if(abstract !== undefined && abstract.toLowerCase().includes(thisKeyword)) { needleFind = 1 }
            // if(fullclaims !== undefined && fullclaims.toLowerCase().includes(thisKeyword)) { needleFind = 1 }
            
            if(needleFind === 1)
            {
              newArray.push(thispost)
            }
         
            return newArray;

           // alert(patentno);
        })
        console.log(tempArray);
        setPost(newArray);
        setIsLoading(false);
       
    }

    const resetHandler = () =>
    {
        //setIsLoading(true);
        // document.getElementById("searchbox").value = "";
        //     axios.get("https://effiepro.herokuapp.com/").then((response) => {
        //       console.log('hi')
        //       console.log(response.data);
        //       setPost(response.data);
        //       setIsLoading(false);
              
        //     });
        
        setPost(props.nonpatentDataset);
        
        
        
    }

// React.useEffect(() => {
//     axios.get(props.baseURL).then((response) => {
//       console.log('hi')
//       console.log(typeof(response.data))
//       console.log(response.data);
//       setPost(response.data);
//       setIsLoading(false);
      
//     });
//   }, [props.baseURL]);

// if (!post) return null;

// const listItems = post.map((thispost) => <li>{thispost['Publication Number']}</li> );

let rowCounter = 1;

    const [dropdownStatus, setDropdownStatus] = useState(0);
   
    return (
        <div className="">
            <div className="">
                
                <div className="flex flex-col md:flex-row p-3 justify-between items-start md:items-stretch w-full">
                    <div className="w-full md:w-1/2 flex flex-col md:flex-row items-start md:items-center">

                   

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
                <input id="selectedPage1" type="text" className="bg-white dark:bg-gray-800 w-12 px-2 mx-2 text-gray-800 dark:text-gray-100 focus:outline-none focus:border focus:border-indigo-700 font-normal flex items-center text-xs border-gray-300 dark:border-gray-200 rounded border" defaultValue={77} />
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
                                {/* <input id="search" className="w-full bg-transparent dark:bg-gray-800 text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 font-normal pl-8 pr-24 h-10 flex items-center text-sm border-gray-300 dark:border-gray-200 rounded border" placeholder="Search here" /> */}
                                <div className="relative">
                        <div className="absolute text-gray-600 dark:text-gray-400 flex items-center pl-3 border-r dark:border-gray-700 h-full pr-1">
                            <select className="uppercase text-sm leading-tight tracking-normal focus:outline-none h-8 appearance-none pr-6 z-20 relative bg-transparent">
                                <option value="usd">All</option>
                                <option value="aus">Literature</option>
                                <option value="pak">Title</option>
                                <option value="pak">Abstract</option>
                                <option value="pak">Claims</option>
                                <option value="pak">Publication</option>
                                <option value="pak">Author</option>
                                <option value="pak">Affiliation</option>
                                
                            </select>
                            <div className="mx-1 absolute right-0 z-10">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" />
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                        </div>
                        <input id="searchbox" className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 font-normal w-full h-10 flex items-center pl-48 text-sm border-gray-300 rounded border shadow" placeholder="Search Here" />
                    </div>
                            </div>
                        </div>
                    
                        <button onClick={searchKeyword} className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-indigo-600 hover:text-indigo-600 rounded border border-indigo-700 text-indigo-600 px-6 py-2 text-sm">Search</button>
               
               <button onClick={resetHandler} className="mx-2 my-2 bg-white transition duration-150 ease-in-out hover:border-red-600 hover:text-red-600 rounded border border-red-700 text-red-600 px-6 py-2 text-sm">Reset</button>
      
                        
                        
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
                                        <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Publication Year</p>
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
                                        <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Literature Focus</p>
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
                                        <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Author</p>
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
                                        <p className="text-gray-800 dark:text-gray-100 font-normal text-left text-xs tracking-normal leading-4">Affiliation</p>
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

                        {isLoading ? <LoadingSpinner /> : console.log('tets')}
                            
                            {post.map((thispost, i) => 
                            <SingleRecordNPA patentno={thispost['Publication year']} 
                            title = {thispost['Title']} 
                            assignee = {thispost['Literature Focus']} 
                            publication = {thispost['Affiliation']}
                            application = {thispost['Author']}
                            legal = {thispost['Legal Status']}
                            inventor = {thispost['Inventors']}
                            extended = {thispost['Extended Family Members']}
                            ipcclass = {thispost['ICR']}
                            cpcclass = {thispost['CPC']}
                            usclass = {thispost['US Class (UC)']}
                            abstract = {thispost['Abstract']}
                            fullclaims = {thispost['URL/LINK']}
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
