import React, { useRef } from 'react';
import './DocumentButton.css';

const icons = {
  Resume: '📄',
  'Gov ID': '🆔',
  Agreement: '📁',
  'Joining Letter': '✉️',
};

export default function DocumentButton({ internId, docName, isUploaded, onUpload }) {
  const inputFileRef = useRef(null);

  const handleClick = () => {
    inputFileRef.current?.click();
  };

  const handleChange = e => {
    if (e.target.files.length > 0) {
      onUpload(internId, docName);
      e.target.value = ''; // reset file input
    }
  };

  return (
    <>
      <button
        type="button"
        className={`documentButton ${isUploaded ? 'uploaded' : ''}`}
        onClick={handleClick}
        
      >
        <span className="docIcon" >{icons[docName]}</span> {docName}
      </button>
      <input
        type="file"
        ref={inputFileRef}
        onChange={handleChange}
        style={{ display: 'none' }}
       
      />
    </>
  );
}
