import React, { useState } from "react";
import {Link} from 'react-router-dom';
export default function Navbar() {
    

const openDataset = () => {
    var thislink = document.getElementById('taxshow');
    thislink.style.display = 'none'; 
    thislink = document.getElementById('datashow');
    thislink.style.display = 'block'; 
}

const openTaxonomy = () => {

    
    var thislink = document.getElementById('datashow');
    thislink.style.display = 'none'; 
    thislink = document.getElementById('taxshow');
    thislink.style.display = 'block'; 
}

    const [sideBar, setsideBar] = useState();
    // var link = document.getElementById('taxshow');
    // link.style.display = 'none'; 
    // var link = document.getElementById('datashow');
    // link.style.display = 'none'; 
    return (
        <>
            <div className="h-full w-full">
                {/* Code block starts */}
                <nav role="navigation" className="md:px-6 lg:px-4 w-full mx-auto hidden md:block bg-white shadow-md">
                    <div className="container  justify-between h-20 flex items-center bg-white md:items-stretch mx-auto border-b border-gray-200">
                        <div className="h-full flex items-center">
                            <button role="img" aria-label="logo" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 mr-10 flex items-center">
                                <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1 17H0H1ZM7 17H6H7ZM17 27L17 28L17 27ZM27 17L28 17L27 17ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28L17 26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26L17 28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17L26 17C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17L28 17ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
                                        fill="#1F2937"
                                    />
                                </svg>
                            </button>
                            <ul className="pr-12 md:flex items-center h-full hidden">
                                <li>
                                    
                              
                               <Link
              to="/dashboard"
            >
                                       Dashboard
                                       </Link>
                             
                                    
                                  
                                </li>
                                <li className="px-6">
                                    <button onClick={openDataset}>
Dataset
                                    </button>
                                    
                                </li>
                               
                                <li>
                                <button onClick={openTaxonomy}>
                                       Taxonomy
                                    
                                </button>
                                </li>
                               
                            </ul>
                        </div>
                        <div className="md:flex items-center justify-end hidden">
                            <div className="flex items-center">
                                <div className="md:pr-10 lg:pr-0 h-full flex items-center">
                                    <div className="relative">
                                        {/* <div className="text-gray-600 absolute ml-3 inset-0 m-auto lg:w-4 lg:h-4 md:w-6 md:h-6">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-600 stroke-current icon icon-tabler icon-tabler-search" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                <circle cx={10} cy={10} r={7} />
                                                <line x1={21} y1={21} x2={15} y2={15} />
                                            </svg>
                                        </div> */}
                                        {/* <input className="hidden lg:block border border-gray-200 focus:outline-none focus:border-indigo-700 w-64 rounded text-sm text-gray-800 pl-8 py-2" type="text" placeholder="Search here" /> */}
                                   
                                   
                                        <div class=" hidden sm:flex justify-end flex-row lg:pr-7 sm:pr-6 py-6 pr-4 pl-8">
                                {/* <div class="cursor-pointer focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 relative flex justify-center items-center xl:mr-8 mr-6">
                                    <img class="dark:bg-white rounded" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-4-svg3.svg" alt="bell" />
                                    <div class="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute top-1 right-0 m-auto duration-200"></div>
                                    <div class=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute top-1 right-0 m-auto shadow-lg"></div>                                    
                                </div> */}
                                <div class=" flex justify-center items-center flex-row">
                                    {/* <img class="w-10 h-10 " src="https://i.ibb.co/QMddNDb/Ellipse-14.png" alt="individual person" /> */}
                                    <div class="ml-2">
                                        <p class="text-lg leading-4 font-semibold text-gray-800 dark:text-white ">Demo</p>
                                        <p class=" font-normal text-xs leading-3 text-gray-600 dark:text-gray-200  mt-1">demo@effepro.com</p>
                                    </div>
                                    <img class="cursor-pointer dark:bg-white rounded py-2 px-1 transform duration-100 xl:ml-7 lg:ml-3.5 ml-2 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-gray-800 " src="https://tuk-cdn.s3.amazonaws.com/can-uploader/header-4-svg4.svg" alt="rotate" />                                  
                                </div>
                            </div>

                                    </div>
                                </div>
                      
                                
                            </div>
                        </div>
                       
                    </div>
                    <div className="w-full container justify-between h-12 flex items-center bg-white md:items-stretch mx-auto">
                        <div className="h-full flex w-full flex items-center">
                            <ul id="datashow" className="hidden pr-12 py-4 items-center h-full">
                                <li>i
                                    <Link to="/dataset" >
                                           Patent Dataset
                                    </Link>
                                </li>
                                <li>
                                    <svg className="mx-4" width={5} height={13} viewBox="0 0 5 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.67347 0.34082H3.59961L0.318359 12.5312H1.39222L4.67347 0.34082Z" fill="#E5E7EB" />
                                    </svg>
                                </li>
                                <li>
                                    <Link to="/NPAdataset" >
                                            Non-Patent Dataset
                                    </Link>
                                </li>
                                
                               
                            </ul>

                            <ul id="taxshow" className="pr-12 py-4 md:flex items-center h-full">
                                <li>
                                    <Link to="/taxonomy" >
                                           Patent Taxonomy
                                    </Link>
                                </li>
                                <li>
                                    <svg className="mx-4" width={5} height={13} viewBox="0 0 5 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.67347 0.34082H3.59961L0.318359 12.5312H1.39222L4.67347 0.34082Z" fill="#E5E7EB" />
                                    </svg>
                                </li>
                                <li>
                                    <Link to="/NPAtaxonomy" >
                                            Non-Patent Taxonomy 
                                    </Link>
                                </li>
                                
                               
                            </ul>

                            

                            

                        </div>
                        <div tabindex="0" aria-label="indigo background badge justify-right" class="mt-8 focus:outline-none bg-indigo-700 h-8 w-1/2  mb-4 md:mb-0 rounded-full flex items-center justify-center">
                        <span class="text-sm text-white font-normal">Project Name - Alternative protein sweeteners for soda/beverage
</span>
                    </div>
                    </div>
                </nav>
                {/* Navbar */}
                <nav className="md:hidden">
                    <div className="w-full shadow-md bg-white fixed top-0 z-40">
                        <div className="flex md:hidden mx-auto container">
                            <div className="border-b py-4 border-gray-200 flex items-stretch justify-between mx-4 items-center w-full">
                                <div aria-label="logo" role="img" tabIndex={0} className="focus:outline-none">
                                    <svg width={34} height={34} viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M1 17H0H1ZM7 17H6H7ZM17 27L17 28L17 27ZM27 17L28 17L27 17ZM17 0C12.4913 0 8.1673 1.79107 4.97918 4.97918L6.3934 6.3934C9.20644 3.58035 13.0218 2 17 2V0ZM4.97918 4.97918C1.79107 8.1673 0 12.4913 0 17H2C2 13.0218 3.58035 9.20644 6.3934 6.3934L4.97918 4.97918ZM0 17C0 21.5087 1.79107 25.8327 4.97918 29.0208L6.3934 27.6066C3.58035 24.7936 2 20.9782 2 17H0ZM4.97918 29.0208C8.1673 32.2089 12.4913 34 17 34V32C13.0218 32 9.20644 30.4196 6.3934 27.6066L4.97918 29.0208ZM17 34C21.5087 34 25.8327 32.2089 29.0208 29.0208L27.6066 27.6066C24.7936 30.4196 20.9782 32 17 32V34ZM29.0208 29.0208C32.2089 25.8327 34 21.5087 34 17H32C32 20.9782 30.4196 24.7936 27.6066 27.6066L29.0208 29.0208ZM34 17C34 12.4913 32.2089 8.1673 29.0208 4.97918L27.6066 6.3934C30.4196 9.20644 32 13.0218 32 17H34ZM29.0208 4.97918C25.8327 1.79107 21.5087 0 17 0V2C20.9782 2 24.7936 3.58035 27.6066 6.3934L29.0208 4.97918ZM17 6C14.0826 6 11.2847 7.15893 9.22183 9.22183L10.636 10.636C12.3239 8.94821 14.6131 8 17 8V6ZM9.22183 9.22183C7.15893 11.2847 6 14.0826 6 17H8C8 14.6131 8.94821 12.3239 10.636 10.636L9.22183 9.22183ZM6 17C6 19.9174 7.15893 22.7153 9.22183 24.7782L10.636 23.364C8.94821 21.6761 8 19.3869 8 17H6ZM9.22183 24.7782C11.2847 26.8411 14.0826 28 17 28L17 26C14.6131 26 12.3239 25.0518 10.636 23.364L9.22183 24.7782ZM17 28C19.9174 28 22.7153 26.8411 24.7782 24.7782L23.364 23.364C21.6761 25.0518 19.3869 26 17 26L17 28ZM24.7782 24.7782C26.8411 22.7153 28 19.9174 28 17L26 17C26 19.3869 25.0518 21.6761 23.364 23.364L24.7782 24.7782ZM28 17C28 14.0826 26.8411 11.2847 24.7782 9.22183L23.364 10.636C25.0518 12.3239 26 14.6131 26 17L28 17ZM24.7782 9.22183C22.7153 7.15893 19.9174 6 17 6V8C19.3869 8 21.6761 8.94821 23.364 10.636L24.7782 9.22183ZM10.3753 8.21913C6.86634 11.0263 4.86605 14.4281 4.50411 18.4095C4.14549 22.3543 5.40799 26.7295 8.13176 31.4961L9.86824 30.5039C7.25868 25.9371 6.18785 21.9791 6.49589 18.5905C6.80061 15.2386 8.46699 12.307 11.6247 9.78087L10.3753 8.21913ZM23.6247 25.7809C27.1294 22.9771 29.1332 19.6127 29.4958 15.6632C29.8549 11.7516 28.5904 7.41119 25.8682 2.64741L24.1318 3.63969C26.7429 8.20923 27.8117 12.1304 27.5042 15.4803C27.2001 18.7924 25.5372 21.6896 22.3753 24.2191L23.6247 25.7809Z"
                                            fill="#1F2937"
                                        />
                                    </svg>
                                </div>
                                <div className="flex md:hidden items-center justify-end">
                                    <div className="flex items-center">
                                        <div className="h-full flex items-center">
                                            <button aria-label="show notifications" className="relative focus:outline-none focus:text-indigo-700 hover:text-indigo-700 focus:border-indigo-700 hover:border-indigo-700 h-full flex items-center justify-center text-gray-600 cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" />
                                                    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                                </svg>
                                                <div className="absolute top-0 left-4 mt-0 mr-4 pr-1 pt-1">
                                                    <div className="animate-ping w-2 h-2 rounded-full bg-blue-400" />
                                                </div>
                                            </button>
                                        </div>
                                       

                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    {/*Mobile responsive sidebar*/}
                    <div className={sideBar ? "absolute w-full h-full transform translate-x-0 z-40 transition duration-700 sm:hidden":"absolute w-full h-full transform -translate-x-full z-40 transition duration-700 sm:hidden"} id="mobile-nav">
                        <div className="w-full h-full shadow-lg z-40 fixed overflow-y-auto  top-0 bg-white flex-col justify-between xl:hidden pb-4 transition duration-500 ease-in-out">
                            <div className="px-5 h-full">
                                <div className="flex flex-col justify-between h-full w-full">
                                    <div>
                                        <div className="mt-6 flex w-full items-center justify-between">
                                            <div className="border-b border-gray-200 pb-8 flex items-center justify-between w-full">
                                                <div className="md:pr-10 lg:pr-0 h-full flex items-center w-full">
                                                    <div className="relative w-full">
                                                        <div className="text-gray-800 absolute ml-3 inset-0 m-auto w-4 h-4">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                <path stroke="none" d="M0 0h24v24H0z" />
                                                                <circle cx={10} cy={10} r={7} />
                                                                <line x1={21} y1={21} x2={15} y2={15} />
                                                            </svg>
                                                        </div>
                                                        <input className="md:hidden border border-gray-300 focus:outline-none focus:border-indigo-700 w-full rounded text-sm text-gray-800 pl-8 py-2" type="text" placeholder="Search here" />
                                                    </div>
                                                </div>
                                                <button   aria-label="close menu" className="focus:outline-none focus:ring-2 rounded-md text-gray-800 pl-8" onClick={()=>setsideBar(!sideBar)} >
                                                    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13 1L1 13" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M1 1L13 13" stroke="#1F2937" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                {/* Sidebar ends */}
                {/* Code block ends */}
            </div>
        </>
    );
}
