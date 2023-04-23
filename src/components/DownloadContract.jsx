import React from 'react';
import "../styles/DownloadContract.css"

const DownloadContract = () => {
  const downloadContract = () => {
    window.location.href = "/daycare-contract.pdf";
  };

  return (
    <div>
      <h1 className='contract-header'>Download Daycare Contract</h1>
      <button className='download' onClick={downloadContract}>Download Contract</button>
    </div>
  );
};

export default DownloadContract;
