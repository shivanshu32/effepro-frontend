import React from "react";
const TableCompare = () => {
    return (
        <div className="py-12">
            <div className="mx-auto container bg-white dark:bg-gray-800 shadow rounded">
                
                <div className="w-full table-wrp block">
                    <table className="min-w-full h-64 bg-white dark:bg-gray-800 ">
                        <thead className="py-5 bg-white border-b sticky top-0">
                            <tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
                                <th className="pl-8 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                                Ranking
                                </th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
                                Protein Sweetner Name  
                                </th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Solution</th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Solution Proposed By</th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Non caloric or very low calorie</th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Stable at low pH (~pH 3.0)</th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">Sensory Profile Closer to Sugar</th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">No Licorice taste or After taste</th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-8 text-left text-sm tracking-normal leading-4">Thermal Stability</th>    
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-8 text-left text-sm tracking-normal leading-4">Stable to UV Exposure</th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-8 text-left text-sm tracking-normal leading-4">Low Cost</th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-8 text-left text-sm tracking-normal leading-4">Mass Production</th>
                                <th className="text-gray-600 dark:text-gray-400 font-normal pr-8 text-left text-sm tracking-normal leading-4">Solubility</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                                <td className="pl-8  text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    1
                                </td>
                                <td className="text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                   Monellin
                                </td>
                                <td className="text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Fusing two chains of monellin protein into one through G6-I46 binding</td>
                                <td className="text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">University of California-Berkeley, Lucky Biotech Corp</td>
                                <td class="pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
</svg>
                                </td>
                                <td class="pl-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 fill-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
</svg></td>
                                <td class="pl-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
</svg></td>
                                <td class="pl-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
</svg></td>
                                <td class="pl-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
</svg></td>
                                <td class="pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
                                </td>
                                <td class="pl-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg></td>
                                <td class="pl-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
</svg></td>
                                <td class="pl-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg></td>
                                
                            </tr>
                            <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                                <td className="pl-8 pr-4 text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    2
                                </td>
                                <td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                   Composition of Thaumatin
                                </td>
                                <td className="text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Plant fibers-Acacia fiber & Actilight</td>
                                <td className="text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Unavoo Food Tech LTD</td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-red-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-indigo-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-indigo-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-indigo-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-indigo-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-red-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-red-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-red-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-red-400"></div></td>
                                
                            </tr>

                            <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                                <td className="pl-8  text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    3
                                </td>
                                <td className="text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                   Composition of Thaumatin
                                </td>
                                <td className="text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Dextrin/ cyclodextrin</td>
                                <td className="text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Individual Inventors</td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-red-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-indigo-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-indigo-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-indigo-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-indigo-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-red-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-red-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-red-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-red-400"></div></td>
                                
                            </tr>

                            <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                                <td className="pl-8  text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    4
                                </td>
                                <td className="text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                   Brazzein
                                </td>
                                <td className="text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Cweet by Natur Research Ingredients Inc</td>
                                <td className="text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">Natur Research Ingredients Inc</td>
                                <td class="pl-2"><div class="w-2 h-2 flex rounded-full bg-indigo-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-indigo-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-indigo-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-indigo-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-indigo-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-red-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-indigo-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-red-400"></div></td>
                                
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-indigo-400"></div></td>
                                
                                
                            </tr>

                            <tr className="h-24 border-gray-300 dark:border-gray-200 border-b">
                                <td className="pl-8  text-left whitespace-no-wrap text-sm text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                    5
                                </td>
                                <td className="text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
                                   Undisclosed
                                </td>
                                <td className="text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">MilisBio's new protein sweetner</td>
                                <td className="text-sm whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">MilisBio</td>
                                <td class="pl-2"><div class="w-2 h-2 flex rounded-full bg-indigo-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-indigo-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-indigo-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-indigo-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-indigo-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-red-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-red-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-red-400"></div></td>
                                <td class="pl-2"><div class="w-2 h-2 rounded-full bg-indigo-400"></div></td>
                              
                                
                            </tr>


                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default TableCompare;
