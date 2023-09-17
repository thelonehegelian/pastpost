'use client';
import React, { useState } from 'react';
import '../../styles/style.css';

const validFileTypes = [
  'video/mp4',
  'image/jpeg',
  'image/jpg',
  'image/gif',
  'video/webm',
  'video/quicktime',
];
const maxTotalFileSize = 10 * 1024 * 1024; // 10MB in bytes

const FileUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const getTotalFileSize = (files: File[]) =>
    files.reduce((totalSize, file) => totalSize + file.size, 0);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      const selected: File[] = Array.from(files);

      // Validate file types
      const invalidFiles = selected.filter((file) => !validFileTypes.includes(file.type));

      // Filter out invalid files
      const validFiles = selected.filter((file) => !invalidFiles.includes(file));

      // Check total file size
      const totalFileSize = getTotalFileSize([...selectedFiles, ...validFiles]);

      if (totalFileSize > maxTotalFileSize) {
        setErrorMessage(`Total file size exceeds 10MB limit`);
      } else {
        // Update selected files state and clear error message
        setSelectedFiles([...selectedFiles, ...validFiles]);
        setErrorMessage(null);
      }
    }
  };

  const handleFileRemove = (fileToRemove: File) => {
    const updatedFiles = selectedFiles.filter((file) => file !== fileToRemove);
    setSelectedFiles(updatedFiles);
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;

    if (files) {
      const selected: File[] = Array.from(files);

      const invalidFiles = selected.filter((file) => !validFileTypes.includes(file.type));

      const validFiles = selected.filter((file) => !invalidFiles.includes(file));

      const totalFileSize = getTotalFileSize([...selectedFiles, ...validFiles]);

      if (totalFileSize > maxTotalFileSize) {
        setErrorMessage(`Total file size exceeds 10MB limit`);
      } else {
        // Update selected files state and clear error message
        setSelectedFiles([...selectedFiles, ...validFiles]);
        setErrorMessage(null);
      }
    }
  };

  const preventDefault = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div className="relative">
      <div className="flex flex-col  justify-center">
        <div
          className="flex flex-col border-dotted border-2 border-[#A9BBC6]justify-center items-center my-1/2 mx-auto p-32 w-10/12"
          onDragOver={preventDefault}
          onDragEnter={preventDefault}
          onDrop={handleFileDrop}
        >
          <p className="my-4 text text-center">
            Upload files or drag and drop
            <br />
            MP4, JPEG, JPG, GIF, WebM, Mov up to 10MB (combined)
          </p>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className="selected-files">
            <ul>
              {selectedFiles.map((file) => (
                <li className="flex" key={file.name}>
                  <h2>{file.name}</h2>
                  <button
                    className="btn btn-outline btn-error btn-xs"
                    onClick={() => handleFileRemove(file)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <label className="btn btn-outline absolute right-32 w-40 my-6 btn-primary">
        <input
          type="file"
          accept=".mp4,.jpeg,.jpg,.gif,.webm,.mov"
          multiple
          onChange={handleFileSelect}
          style={{ display: 'none' }}
        />
        Add Files
      </label>
    </div>
  );
};

export default FileUploader;
