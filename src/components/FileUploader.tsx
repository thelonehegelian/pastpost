'use client';
import React, { useState, useEffect } from 'react';
import '../../styles/style.css';
import lighthouse from '@lighthouse-web3/sdk';
import { ethers } from 'ethers';
import { useRouter } from 'next/navigation';
// BAD IDEA, process.env isn't working, no time to fix
const API_KEY = process.env.LIGHTHOUSE_APIKEY || 'de1443ca.854cd879e421475f935d4e74126035f7';

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
  const [filesToUpload, setFilesToUpload] = useState<FileList | null>(null); // Initialize as null
  const [account, setAccount] = useState('');
  const [accounts, setAccounts] = useState([]);
  const router = useRouter();
  const connectMetamask = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      alert('please install metamask');
    }
    if (ethereum) {
      const walletAccounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccounts(walletAccounts);

      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });

      window.ethereum.on('accountsChanged', () => {
        window.location.reload();
      });
    }
  };

  useEffect(() => {
    connectMetamask();
  }, [account]);

  const createEncryptionSignature = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const messageRequested = (await lighthouse.getAuthMessage(address)).data.message;
    const signedMessage = await signer.signMessage(messageRequested);
    setAccount(accounts[0]);
    return {
      signedMessage: signedMessage,
      publicKey: address,
    };
  };

  interface IEncryptionSignature {
    signedMessage: string;
    publicKey: string;
  }

  const progressCallback = (progressData) => {
    let percentageDone = 100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };

  const uploadFileEncrypted = async (file) => {
    const sig = await createEncryptionSignature();
    const response = await lighthouse.uploadEncrypted(
      file,
      API_KEY,
      sig.publicKey,
      sig.signedMessage,
      undefined,
      progressCallback,
    );

    return response;
  };

  const getTotalFileSize = (files: File[]) =>
    files.reduce((totalSize, file) => totalSize + file.size, 0);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFilesToUpload(files);
    }

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

  const handleFileUpload = async () => {
    let filehash = '';
    if (filesToUpload) {
      const res = await uploadFileEncrypted(filesToUpload);
      filehash = res.data[0].Hash;
    }
    if (filehash !== '') {
      const uri = `/createcapsule?cid=${filehash}`;
      router.push(uri);
    }
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
      <div className="flex justify-center items-center pt-20">
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
        <button className="btn btn-secondary" onClick={handleFileUpload}>
          Upload Files
        </button>
      </div>
    </div>
  );
};

export default FileUploader;
