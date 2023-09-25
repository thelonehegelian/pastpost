import React from 'react';
import confettibox from '../../../public/confettibox.svg';
import confetti from '../../../public/confetti.svg';

import Image from 'next/image';
import Link from 'next/link';

const page = () => {
  return (
    <div className="py-28 flex justify-center items-center relative">
      <div>
        <Image src={confettibox} alt="confetti" />
      </div>
      <div className="absolute inset-y-20  right-40">
        {' '}
        <h1 className="text-4xl font-extrabold w-80 absolute top-20 left-16">
          Your capsule has been sealed!
        </h1>
        <Image src={confetti} alt="confetti" />
        <div className="absolute bottom-20  ">
          <Link href="/dashboard">
            <button className="btn btn-outline btn-primary mx-4">My Time Capsule</button>
          </Link>
          <button className="btn btn-primary">Create calendar event</button>
        </div>
      </div>
    </div>
  );
};

export default page;
