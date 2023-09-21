'use client';
import '../../../styles/style.css';
import '../../../styles/createCapsule.css';
import Image from 'next/image';
import { ethers } from 'ethers';
import lighthouse from '@lighthouse-web3/sdk';
import { useState, useEffect } from 'react';
import axios from 'axios';
interface ICapsuleInformation {}

export default function CreateCapsuleFormPage(): JSX.Element {
  const [senderEmail, setSenderEmail] = useState('');
  const [senderAddress, setSenderAddress] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverEmail, setReceiverEmail] = useState('');
  const [receiverMessage, setReceiverMessage] = useState('');
  const [receiverAddress, setReceiverAddress] = useState('');
  const [date, setDate] = useState('');
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

  

  interface IEncryptionSignature {
    signedMessage: string;
    publicKey: string;
  }

  const handleCreateCapsule= () => {}


  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === 'senderEmail') {
      setSenderEmail(value);
    }
    if (id === 'senderAddress') {
      setSenderAddress(value);
    }
    if (id === 'receiverName') {
      setReceiverName(value);
    }
    if (id === 'receiverEmail') {
      setReceiverEmail(value);
    }

    if (id === 'receiverMessage') {
      setReceiverMessage(value);
    }
    if (id === 'receiverAddress') {
      setReceiverAddress(value);
    }
  };

  return (
    <div className="background flex flex-col">
      {/* top container */}

      <div className="w-full h-2/3 flex bg-sky-100">
        <div className="text-black w-1/2 flex flex-col justify-end">
          {/* HEADING AND SUBHEADING */}
          <div className="pl-80 pb-20">
            <h1 className="font-medium text-md pb-6">Almost There!</h1>
            <div className="font-medium text-2xl">
              <span> Let's review your</span>
              <br />
              <span>time capsule</span>
            </div>
          </div>
        </div>
      </div>
      {/* bottom container */}
      <div className="w-full h-3/5 bg-white pl-40 pr-40 pt-10 pb-40">
        <div className=" w-1/2 flex flex-col  h-full">
          <div className="w-1/2  mb-10 flex flex-col justify-center h-1/4 pl-28">
            <div className="flex p-4">
              <Image
                src="/circleCheck.svg"
                alt="check circle"
                width={30}
                height={30}
                className="pr-2"
              />
              <p className="text-black font-medium">Your media</p>
            </div>
            <p className="text-gray-500 pl-12">These are your time capsules</p>
          </div>
          <div className="relative w-full h-full">
            <Image src="/capsuleImages.svg" alt="capsules" fill={true} />
          </div>
        </div>
      </div>

      {/* TODO separate into component */}

      {/* form container */}
      <div className="formContainer rounded-xl">
        <h1 className="text-black font-semibold text-2xl pb-4">Who will get this time capsule</h1>
        {/* Section */}
        <div>
          <h3 className="text-black font-medium text-md pb-4">Sender Info</h3>
          {/* Sender Email          */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email*</span>
            </label>
            <input
              id="senderEmail"
              onChange={handleChange}
              type="text"
              placeholder="jdoe@gmail.com"
              className="input input-bordered w-full max-w-xs bg-gray-50"
            />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Wallet or ENS*</span>
            </label>
            <input
              id="senderAddress"
              onChange={handleChange}
              type="text"
              placeholder="0x... or myEthereum.eth"
              className="input input-bordered w-full max-w-xs bg-gray-50"
            />
          </div>
        </div>
        {/* Section */}
        <div>
          <h3 className="text-black font-medium text-md pb-4 pt-8">Receiver Info</h3>

          {/* Receiver Name */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              id="receiverName"
              onChange={handleChange}
              type="text"
              placeholder="joe doe"
              className="input input-bordered w-full max-w-xs bg-gray-50"
            />
          </div>

          {/* Receiver Email */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email*</span>
            </label>
            <input
              id="receiverEmail"
              onChange={handleChange}
              type="text"
              placeholder="jdoe@gmail.com"
              className="input input-bordered w-full max-w-xs bg-gray-50"
            />
          </div>

          {/* Message to the Receiver */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <input
              id="receiverMessage"
              onChange={handleChange}
              type="text"
              placeholder="Write a short message"
              className="input input-bordered w-full max-w-xs bg-gray-50"
            />
          </div>
          {/* Receiver Address */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Wallet or ENS*</span>
            </label>
            <input
              id="receiverAddress"
              onChange={handleChange}
              type="text"
              placeholder="0x... or myEthereum.eth"
              className="input input-bordered w-full max-w-xs bg-gray-50"
            />
          </div>
        </div>
        {/* Date to be opened */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Date*</span>
          </label>
          <input
            id="date"
            onChange={handleChange}
            type="text"
            placeholder="31/12/2023"
            className="input input-bordered w-full max-w-xs bg-gray-50"
          />
        </div>
        <div className="pt-12">
          <button className="btn btn-primary" onClick={handleCreateCapsule}>
            Create Capsule
          </button>
        </div>
      </div>
    </div>
  );
}
