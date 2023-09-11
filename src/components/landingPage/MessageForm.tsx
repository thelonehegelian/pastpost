'use client';
import { useState } from 'react';

interface HappyNewYearNFT {
  nftTitle: string;
  message: string;
  // TODO get this from the wallet
  owner: string;
  receiverAddress: string;
  unlockDate: string;
  senderName?: string;
  senderAddress?: string;

  // TODO must be of the type TxSig
  txSig: string;
}
export default function MessageForm() {
  const initialUserRequest: HappyNewYearNFT = {
    nftTitle: '',
    message: '',
    owner: '',
    receiverAddress: '',
    unlockDate: '',
    senderName: '',
    senderAddress: '',
    txSig: '',
  };
  const [userRequest, setUserRequest] = useState<HappyNewYearNFT>(initialUserRequest);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserRequest((prevUserRequest) => ({ ...prevUserRequest, [name]: value }));
  };

  const validateUserRequest = (userRequest: HappyNewYearNFT) => {}
  // NOTE must return valid txSig of type TxSig
  const signTransaction = async () => {}
  
  const handleCreateCapsule = async () => {
    
    // console.log(userRequest)
    // TODO  validate
    // validateUserRequest(userRequest)
    // TODO set txSig in userRequest
    try {
      console.log("sending request")
      const response = await fetch('loca/api/hny', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userRequest),
      });

      if (response.ok) {
        // Success
        // TODO wait for txReceipt from the server
      } else {
        // Error
        // TODO if there are errors display them clearly
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="artboard artboard-horizontal phone-1">
         <h1 className="text-sky-200 text-xl">Create a Time Capsule </h1>
        <input name= "nftTitle" value = {userRequest.nftTitle} onChange = {handleInputChange}type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" />
        <input name = "message" value = {userRequest.message} onChange = {handleInputChange} type="text" placeholder="Message" className="input input-bordered w-full max-w-xs" />
        <input
          name = "owner"
          value = {userRequest.owner}
          onChange = {handleInputChange}
          type="text"
          placeholder="Receiver Address"
          className="input input-bordered w-full max-w-xs"
        />
        {/* TODO Add this option later */}
        {/* <input type="text" placeholder="Lock Time/Data" className="input input-bordered w-full max-w-xs" /> */}
        <input
          name = "unlockDate"
          value = {userRequest.unlockDate}
          onChange = {handleInputChange}
          type="text"
          placeholder="Unlock Date"
          className="input input-bordered w-full max-w-xs"
        />

        <button className="btn btn-primary" onClick={handleCreateCapsule}>
          Create Capsule
        </button>
      </div>
    </>
  );
}
