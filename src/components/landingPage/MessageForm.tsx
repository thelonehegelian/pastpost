"use client";
import {useState} from 'react';

interface HappyNewYearNFT {
  nftTitle: string;
  message: string;
  owner: string;
  unlockDate: string;
  senderName: string;
  senderAddress: string;
}
export default function MessageForm() {
 const initialUserRequest: HappyNewYearNFT = {
    nftTitle: '',
    message: '',
    owner: '',
    unlockDate: '',
    senderName: '',
    senderAddress: '',
  };
  const [userRequest, setUserRequest] = useState<HappyNewYearNFT>(initialUserRequest)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserRequest((prevUserRequest) => ({ ...prevUserRequest, [name]: value }));

  }


const handleCreateCapsule = async () => {
  // TODO add validation
  try {
    const response = await fetch('api/hny', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userRequest),
    });

    if (response.ok) {
      // Success
    } else {
      // Error
    }
  } catch (error) {
    console.error(error);
  }
};

  const [message, setMessage] = useState('')
    return (
    <>
    <div  className="artboard artboard-horizontal phone-1">
          <h1 className='text-sky-200 text-xl'>Create a Time Capsule </h1>
            <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Message" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Receiver Address" className="input input-bordered w-full max-w-xs" />
            {/* TODO Add this option later */}
            {/* <input type="text" placeholder="Lock Time/Data" className="input input-bordered w-full max-w-xs" /> */}
            <input type="text" placeholder="Unlock Date" className="input input-bordered w-full max-w-xs" />
 
            <button className="btn btn-primary" onClick={handleCreateCapsule}>Create Capsule</button>
      </div>


    </>
    )
}
