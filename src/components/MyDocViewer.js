import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

const MyDocViewer = (props)  => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const previousbutton = () => {
    if(pageNumber > 1)
    {
      setPageNumber(pageNumber - 1)
    }
    else
    {
      alert("You are already on First Page")
    }
    
  }

  const nextbutton = () => {
    if(pageNumber < numPages)
    {
      setPageNumber(pageNumber + 1)
    }
    else{
      alert("You are already on Last Page")
    }
    
  }

  return (
    <div>
      <Document file={props.docpdflink} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <div class="flex justify-between py-4">
                                <button onClick={previousbutton} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Previous
</button>
<button onClick={nextbutton} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Next
</button>
</div>
    </div>
  );
}

export default MyDocViewer;