import React from "react";


function Modal() {
    const popuphandler = (flag) => {
        if (flag) {
            document.getElementById("popup").classList.remove("hidden");
        } else {
            document.getElementById("popup").classList.add("hidden");
        }
    }

    return (
        <>
            <div id="popup" className="z-50 fixed w-full flex justify-center inset-0">
                <div onClick={() => popuphandler(false)} className="w-full h-full bg-gray-900 z-0 absolute inset-0" />
                <div className="mx-auto container">
                    <div className="flex items-center justify-center h-full w-full">
                        <div className="bg-white rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
                            <div className="bg-gray-100 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                                <p className="text-base font-semibold">Objective</p>
                                <button onClick={() => popuphandler(false)} className="focus:outline-none">
                                    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 7L7 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7 7L21 21" stroke="#A1A1AA" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
                                <div className="flex items-center justify-center">
                                    <div className="w-40 h-40 p-16 bg-gray-100 rounded-md flex items-center justify-center">
                                        <svg width={36} height={36} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.5 12H22.515" stroke="#94A3B8" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M25.5 6H10.5C8.01472 6 6 8.01472 6 10.5V25.5C6 27.9853 8.01472 30 10.5 30H25.5C27.9853 30 30 27.9853 30 25.5V10.5C30 8.01472 27.9853 6 25.5 6Z" stroke="#94A3B8" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 22.4999L12 16.4999C12.6841 15.8417 13.4601 15.4951 14.25 15.4951C15.0399 15.4951 15.8159 15.8417 16.5 16.4999L24 23.9999" stroke="#94A3B8" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21 20.9999L22.5 19.4999C23.1841 18.8417 23.9601 18.4951 24.75 18.4951C25.5399 18.4951 26.3159 18.8417 27 19.4999L30 22.4999" stroke="#94A3B8" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                
                                <div className="flex items-center justify-between mt-9">
                                    <button onClick={() => popuphandler(false)} className="px-6 py-3 bg-gray-400 hover:bg-gray-500 shadow rounded text-sm text-white">
                                        Cancell
                                    </button>
                                    <button className="px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white">Add User</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
