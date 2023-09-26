import React from 'react';
import small from './dummydata.js';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Database } from '@tableland/sdk';

interface PastPostTable {
  cid: string;
  id: number;
  nftAddress: string;
  receiver: string;
  sender: string;
  unlockTime: number;
}

interface ListCapsulesProps {
  received: boolean;
  handleAcceptance: () => void;
}
const ListCapsules = ({ received, handleAcceptance }: ListCapsulesProps) => {
  const [tableData, setTableData] = useState<PastPostTable[]>([]);
  // oldTableName = 'pastpost_314159_362';
  const tableName: string = 'pastpost_314159_449'; // Our pre-defined health check table
  const db = new Database();

  const getTableResults = async () => {
    const { results } = await db.prepare(`SELECT * FROM ${tableName};`).all();
    if (results != null && results.length > 0) {
      setTableData(results);
    }
    console.log('Table Data', results);
  };
  useEffect(() => {
    getTableResults();
  }, []);

  if (tableData.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-bold">Loading</h1>
      </div>
    );
  } else {
    return (
      <>
        {small.map((item, index) =>
          received ? (
            <div key={index} className="flex py-2 justify-around">
              <Image src={item.image} className="h-20 w-20 mx-4 " alt="image" />
              <div>
                <h3 className="font-bold text-xl py-2">
                  <Link href={`https://files.lighthouse.storage/viewFile/${tableData[index].cid}`}>
                    `${tableData[index].cid.substring(0, 8)}...`
                  </Link>
                </h3>
                <p> {item.text}</p>
              </div>
              <button className="bg-[#D8F9E4] h-full p-2 rounded-2xl">
                {item.button.options[0]}
              </button>

              <button className="bg-[#D8F9E4] h-full p-2 rounded-2xl" onClick={handleAcceptance}>
                Accept
              </button>
            </div>
          ) : (
            // SENT
            <div key={index} className="flex py-2 justify-around">
              <Image src={item.image} className="h-20 w-20 mx-4 " alt="image" />
              <div>
                <h3 className="font-bold text-xl py-2">
                  <Link href={`https://files.lighthouse.storage/viewFile/${tableData[index].cid}`}>
                    `${tableData[index].cid.substring(0, 8)}...`
                  </Link>
                </h3>
                <p> {item.text}</p>
              </div>
              <button className="bg-[#D8F9E4] h-full p-2 rounded-2xl">
                {item.button.options[0]}
              </button>
            </div>
          ),
        )}
      </>
    );
  }
};

export default ListCapsules;
