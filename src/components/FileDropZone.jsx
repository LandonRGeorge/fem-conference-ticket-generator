import React, {useState, useCallback} from 'react';
import fileIcon from '../assets/images/icon-upload.svg'


const FileDropZone = ({avatar, setAvatar}) => {

  function handleReset(e) {
    e.stopPropagation()
    setAvatar(null)
    document.querySelector('.file-input').value = null
  }

  function handleDrag(e) {
    console.log('handleDrag')
    e.preventDefault();
    e.stopPropagation();
  }

  function handleDrop(e) {
    console.log('handleDrop')
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles && droppedFiles.length >= 1) {
      const file = droppedFiles[0]
      handleFile(file)
      e.dataTransfer.clearData();
    }
  }

  function handleFile(file) {
    console.log('handleFile')
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleFileSelect(e) {
    console.log('handleFileSelect')
    e.stopPropagation()
    const file = e.target.files[0];
    handleFile(file)
  };

  function handleClick(e) {
    e.stopPropagation();
    if (e.target.classList.contains('file-input')) {
      return
    }
    console.log('handleClick')
    document.querySelector('.file-input').click()
  }

  return (
    <div>
      <label>Upload Avatar</label>
      <div className="drop-zone-container">
        <div
          className={`drop-zone`}
          onDrop={handleDrop}
          onClick={handleClick}
          onDragOver={handleDrag}
        >
          <input
            type="file"
            className="file-input"
            onChange={handleFileSelect}
          />
          {
            avatar
              ? <img className="file-icon" src={avatar} alt="upload file icon"/>
              : <img className="file-icon" src={fileIcon} alt="upload file icon"/>
          }

          {
            avatar
              ? (
                <div>
                  <button type="button" className="btn-remove" onClick={handleReset}>Remove image
                  </button>
                  <button type="button" className="btn-change" onClick={handleClick}>Change image
                  </button>
                </div>
              )
              : (
                <div className="drop-zone-text">
                  Drag and drop or click to upload
                </div>
              )
          }


        </div>

      </div>
      <p>Upload your photo (JPEG or PNG, max size: 500KB).</p>
    </div>
  );
};

export default FileDropZone;