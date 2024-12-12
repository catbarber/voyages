// DownloadButton.js
import React from "react";

const DownloadEPUBVol1 = ({ buttonText, linkHref, linkDL }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/public";
    // { linkHref }; // The path to your file in the public folder
    link.download = "TheVoyagesofVictora.epub";
    // { linkDL }; // The file name to be downloaded
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button style={{ margin: "1rem" }} onClick={handleDownload}>
      Download EPUB - Free
    </button>
  );
};

export default DownloadEPUBVol1;
