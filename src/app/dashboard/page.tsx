'use client';

import Image from 'next/image';
import '../../../styles/style.css';
import one from '../../../public/1cmp.svg';
import ListCapsules from '../../components/ListCapsules';
import FriendsCapsule from '../../components/FriendsCapsule';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const register_job = async (cid: string) => {
    const formData = new FormData();
    const requestReceivedTime = new Date();
    const endDate = new Date(requestReceivedTime); // Clone the date object
    endDate.setMonth(endDate.getMonth() + 1);
    const replicationTarget = 2;
    const epochs = 4; // how many epochs before deal end should deal be renewed
    formData.append('cid', cid);
    formData.append('endDate', endDate.toISOString()); // Convert to ISO string
    formData.append('replicationTarget', String(replicationTarget)); // Convert to string
    formData.append('epochs', String(epochs)); // Convert to string

    const response = await axios.post(
      `https://calibration.lighthouse.storage/api/register_job`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data', // Specify content type
        },
      },
    );
    return response;
  };

  const [job, setJob] = useState(false);
  // TODO get this from Tableland
  const [cid, setCid] = useState('');

  const handleAcceptance = async () => {
    console.log('registering job');
    const raas = await register_job(cid);
    if (raas.status === 201) {
      setJob(!job);
    }
  };
  return (
    <div className=" background flex">
      <div className="Navbar flex flex-col pl-4 h-full w-60 border-2 border-indigo-200 border-r-indigo-500 justify-between ">
        {/* Logo */}
        <div className="flex-1">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        </div>
        <div className="flex-1">
          <ul>
            <li className="p-2 text-bold ">Home</li>
            <li className="p-2 text-bold">Drafts</li>
            <li className="p-2 text-bold">Created</li>
          </ul>
        </div>
        <div className="flex-1">
          <button className="btn btn-primary text-bold">Create New</button>
          <ul>
            <li className="p-2 text-bold">Invite</li>
            <li className="p-2 text-bold">Settings</li>
            <li className="p-2 text-bold">Logout</li>
          </ul>
          <div className="p-2 max-w-sm mx-2 rounded-xl shadow-md flex items-center space-x-4">
            <div className="shrink-0">
              <Image className="h-12 w-12 rounded-3xl" src={one} alt={one} />
            </div>
            <div>
              <div className="text-l font-medium text-black">Jayanth</div>
              <p className="text-sm text-slate-500">jay@gmail.com</p>
            </div>
          </div>{' '}
        </div>
      </div>
      <div className="upload w-screen flex   ">
        <div className="flex-1">
          <div className="bg-white drop-shadow-md p-4 m-12 h-5/10 w-5/10 flex flex-col rounded-xl">
            <div className="text-2xl font-bold ml-8 ">Recent Time Capsule</div>
            <ListCapsules received={false} raasWorkers={handleAcceptance} />
          </div>
          <div className="bg-white drop-shadow-md p-4 m-12 h-5/10 w-5/10 flex flex-col rounded-xl">
            <div className="text-2xl font-bold ml-8 ">Received Capsule</div>
            <ListCapsules received={true} raasWorkers={handleAcceptance} />
          </div>
        </div>
        <div className="flex mr-8">
          <div className="bg-white drop-shadow-md ml-20 m-12 h-screen w-full p-12  flex flex-col rounded-xl">
            <div className="text-2xl font-bold  ">Your Friends</div>
            <FriendsCapsule />
          </div>
        </div>
      </div>
    </div>
  );
}
