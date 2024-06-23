import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './MagazineViewer.css';

// Import the pdfjs worker from pdfjs-dist
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const MagazineViewer = ({ pdf }) => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    console.log(`Document loaded with ${numPages} pages`);
    setNumPages(numPages);
  };

  const onDocumentLoadError = (error) => {
    console.error('Error while loading document:', error);
  };

  return (
    <div className="magazine-viewer">
      <Document
        file={pdf}

        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
      >
        {numPages && Array.from(new Array(numPages), (el, index) => (
          <Page key={index} pageNumber={index + 1} renderMode="canvas" renderTextLayer={false} />
        ))}
      </Document>
    </div>
  );
};

export default MagazineViewer;

