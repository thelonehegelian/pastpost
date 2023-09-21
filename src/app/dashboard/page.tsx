'use client';
import axios from 'axios';
import { useState } from 'react';
const register_job = async () => {
  const formData = new FormData();
  const cid = 'QmVUcUswNJCT5rLEXKBq1A7iRBHDRp4oG5sPRygyZp2zuZ';
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

export function Dashboard() {
  const [job, setJob] = useState(false);

  const handleAcceptance = async () => {
    const raas = await register_job();
    if (raas.status === 201) {
      setJob(!job);
    }
  };
  return (
    <div>
      <h1>Dashboard</h1>
      {/* TODO should update based on job status */}
      {/* NOTE this basically means that the time capsule receiver is accepting that they agree to pay for the RAAS service and that it would be worthwhile */}
      <button onClick={handleAcceptance}>Accept?</button>
    </div>
  );
}

export default Dashboard;
