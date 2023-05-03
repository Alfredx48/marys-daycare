import React from 'react';
import "../styles/DownloadContract.css";

const DownloadContract = () => {
  const pdfPath = "/daycare-contract.pdf";
  const downloadFileName = "daycare-contract.pdf";

  return (
    <div>
      <h1 className='contract-header'>Download Daycare Contract</h1>
      <a
        href={pdfPath}
        download={downloadFileName}
        className='download'
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Contract
      </a>
    </div>
  );
};

export default DownloadContract;
