import React from 'react';

const DownloadContract = () => {
  const downloadContract = () => {
    window.location.href = "/daycare-contract.pdf";
  };

  return (
    <div>
      <h1>Download Daycare Contract</h1>
      <button onClick={downloadContract}>Download Contract</button>
    </div>
  );
};

export default DownloadContract;
