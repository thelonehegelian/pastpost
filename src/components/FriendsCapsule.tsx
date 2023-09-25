import React from 'react';
import big from './Friendsdata.js';
import Image from 'next/image';

const FriendsCapsule = () => {
  return (
    <div>
      {big.map((item, index) => (
        <div key={index} className="flex  justify-around m-4">
          <div className="basis-1/4 m-auto">
            <Image src={item.image} className="h-12 w-12 rounded-3xl" alt="image" />
          </div>
          <div className="basis-3/4">
            <h3 className="font-bold text-xl ">{item.Name}</h3>
            <p> {item.wallet_id}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendsCapsule;
