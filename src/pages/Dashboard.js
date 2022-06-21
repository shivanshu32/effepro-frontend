import React from "react";
import CardHome from "../components/CardHome"
import TableCompare from "../components/TableCompare";
import Navbar from '../components/Navbar'


function Dashboard() {
    return (
        <>
        <Navbar/>
            <div className="container pt-6 mx-auto">

                <div className="flex  flex-wrap py-4">
                    <div className="md:w-1/3 h-24 w-full pb-6 md:pb-0 md:pr-6">
                     <CardHome title="Objective" pdflink="./objective-pdf.pdf" />
                     </div>

                    <div className="md:w-1/3 w-full pb-6 md:pb-0 md:pr-6">
                    <CardHome title="Proposed Strategy" pdflink="./proposed-pdf.pdf" />
                    </div>
                    <div className="md:w-1/3 w-full pb-6 md:pb-0">
                    <CardHome title="Ranking Framework" pdflink="./ranking-pdf.pdf" />   
                    </div>
                </div>

            </div>
           

            <div className="container pt-6 mx-auto">

                <div className="flex  flex-wrap py-4">
                    <div className="md:w-1/3 w-full pb-6 md:pb-0 md:pr-6">
                     <CardHome title="Solutions on Brazzein" pdflink="./brazzein.pdf" />
                     </div>

                    <div className="md:w-1/3 w-full pb-6 md:pb-0 md:pr-6">
                    <CardHome title="Solutions on Monellin" pdflink="./monellin-pdf.pdf" />
                    </div>
                    <div className="md:w-1/3 w-full pb-6 md:pb-0 md:pr-6">
                    <CardHome title="Composition" pdflink="./composition-pdf.pdf"/>
                    </div>
                    
                </div>

            </div>

            <div className="container pt-6 mx-auto">

                <div className="flex  flex-wrap py-4">

                    
                    <div className="md:w-1/3 h-24 w-full pb-6 md:pb-0 md:pr-6">
                     <CardHome title="Solutions on Curculin" pdflink="./curculin-pdf.pdf" />
                     </div>

                    <div className="md:w-1/3 w-full pb-6 md:pb-0 md:pr-6">
                    <CardHome title="Solutions on Miraculin" pdflink="./miraculin-pdf.pdf" />
                    </div>
                    <div className="md:w-1/3 w-full pb-6 md:pb-0">
                    <CardHome title="Solutions on Mabinlin" pdflink="./mabinlin-pdf.pdf" />   
                    </div>
                </div>

            </div>

            <div className="container pt-6 mx-auto">

                <div className="flex  flex-wrap py-4">
                    <div className="md:w-1/3 h-24 w-full pb-6 md:pb-0 md:pr-6">
                     <CardHome title="Solutions on New Protein Sweetner Napin" pdflink="./new-protein-sweetener-pdf.pdf" />
                     </div>
                     <div className="md:w-1/3 w-full pb-6 md:pb-0">
                    <CardHome title="Solutions on Thaumatin" pdflink="./thaumatin-pdf.pdf" />   
                    </div>
                   
                    
                </div>

            </div>

            <TableCompare />
           
            {/* <div id="pdfcontainer">
            <MyDocViewer />
            </div> */}
            {/* <Modal /> */}
        </>
    );
}
export default Dashboard;
