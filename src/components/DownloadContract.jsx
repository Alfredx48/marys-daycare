import React from 'react';
import "../styles/DownloadContract.css"

const DownloadContract = () => {
  const downloadContract = () => {
    window.open("/daycare-contract.pdf", "_blank");
  };

  return (
    <div>
      <h1 className='contract-header'>Download Daycare Contract</h1>
      <button target= "_blank" className='download' onClick={downloadContract}>Download Contract</button>
    </div>
  );
};

export default DownloadContract;
