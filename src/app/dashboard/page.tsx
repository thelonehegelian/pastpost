'use client';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Database } from '@tableland/sdk';
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

interface PastPostTable {
  timeCapsuleAddress: string;
  cid: string;
  id: number;
}
export function Dashboard() {
  const [tableData, setTableData] = useState<PastPostTable[]>([]);
  const tableName: string = 'pastpost_314159_362'; // Our pre-defined health check table
  const db = new Database();

  const getTableResults = async () => {
    const { results } = await db.prepare(`SELECT * FROM ${tableName};`).all();
    console.log(results);
  };
  useEffect(() => {
    getTableResults();
    console.log(tableData);
  }, [tableData]);

  const [job, setJob] = useState(false);
  // TODO get this from Tableland
  const [cid, setCid] = useState('');

  const handleAcceptance = async () => {
    const raas = await register_job(cid);
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
      <button onClick={getTableResults}>Get Table Results</button>
    </div>
  );
}

export default Dashboard;
