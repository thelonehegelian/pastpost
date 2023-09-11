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
  const [userRequest, setUserRequest] = useState<HappyNewYearNFT>()


  const [message, setMessage] = useState('')
    return (
        <div>           

            <input type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Message" className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Receiver Address" className="input input-bordered w-full max-w-xs" />
            {/* TODO Add this option later */}
            {/* <input type="text" placeholder="Lock Time/Data" className="input input-bordered w-full max-w-xs" /> */}
            <input type="text" placeholder="Unlock Date" className="input input-bordered w-full max-w-xs" />
    </div>
    )
}
