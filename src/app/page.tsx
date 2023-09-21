'use client';

import React from 'react';
import { ethers } from 'ethers';
import lighthouse from '@lighthouse-web3/sdk';
import { useState } from 'react';
function Home() {
  const [cid, SetCid] = useState('');
  const [account, setAccount] = useState('');
  const [accounts, setAccounts] = useState([]);
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

  connectMetamask();
  const encryptionSignature = async () => {
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

  const progressCallback = (progressData) => {
    let percentageDone = 100 - (progressData?.total / progressData?.uploaded)?.toFixed(2);
    console.log(percentageDone);
  };
  // interface IUploadEncryptedResponse {
  //   file: File;
  //   key: string;
  //   publicKey: string;
  //   signedMessage: string;
  //   additionalData?: any;
  //   progressCallback?: (progress: number) => void;
  // }
  /* Deploy file along with encryption */
  const uploadFileEncrypted = async (file) => {
    /*
       uploadEncrypted(e, accessToken, publicKey, signedMessage, uploadProgressCallback)
       - e: js event
       - accessToken: your API key
       - publicKey: wallets public key
       - signedMessage: message signed by the owner of publicKey
       - dealParameters: default null
       - uploadProgressCallback: function to get progress (optional)
    */
    const sig = await encryptionSignature();

    const response = await lighthouse.uploadEncrypted(
      file,
      'de1443ca.854cd879e421475f935d4e74126035f7',
      sig!.publicKey,
      sig!.signedMessage,
      undefined,
      progressCallback,
    );
    console.log(response.data);
    const { Hash } = response.data[0];
    SetCid(Hash);
    /*
      output:
        data: [{
          Name: "c04b017b6b9d1c189e15e6559aeb3ca8.png",
          Size: "318557",
          Hash: "QmcuuAtmYqbPYmPx3vhJvPDi61zMxYvJbfENMjBQjq7aM3"
        }]
      Note: Hash in response is CID.
    */
  };

  const handleCreateCapsule = async (e) => {
    uploadFileEncrypted(e.target.files[0]);
  };

  return (
    <div className="bg-white h-screen">
      <div className="text-center flex justify-center items-center mt-1">
        <div>
          {account !== '' ? (
            <p>Connected Account: {account}</p>
          ) : (
            <button onClick={() => encryptionSignature()}>Connect Metmask</button>
          )}
        </div>
        {cid}
      </div>
      <input onChange={(e) => handleCreateCapsule(e)} type="file" />

      <a href={`https://files.lighthouse.storage/viewFile/${cid}`}>View File</a>
    </div>
  );
}

export default Home;
