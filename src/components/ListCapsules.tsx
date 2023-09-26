import React from 'react';
import small from './dummydata.js';
import Image from 'next/image';
import Link from 'next/link';
interface ListCapsulesProps {
  received: boolean;
  handleAcceptance: () => void;
}

const ListCapsules = ({ received, handleAcceptance }: ListCapsulesProps) => {
  return (
    <>
      {small.map((item, index) =>
        received ? (
          <div key={index} className="flex py-2 justify-around">
            <Image src={item.image} className="h-20 w-20 mx-4 " alt="image" />
            <div>
              <h3 className="font-bold text-xl py-2">
                <Link href={`https://files.lighthouse.storage/viewFile/${item.cid}`}>
                  `${item.cid.substring(0, 8)}...`
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
                <Link href={`https://files.lighthouse.storage/viewFile/${item.cid}`}>
                  `${item.cid.substring(0, 8)}...`
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
};

export default ListCapsules;
