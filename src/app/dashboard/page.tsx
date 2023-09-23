'use client';
import Image from 'next/image';
import '../../../styles/style.css';
import one from '../../../public/1cmp.svg';
import ListCapsules from '../../components/ListCapsules';
import FriendsCapsule from '../../components/FriendsCapsule';

export function Dashboard() {
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
            <ListCapsules />
          </div>
          <div className="bg-white drop-shadow-md p-4 m-12 h-5/10 w-5/10 flex flex-col rounded-xl">
            <div className="text-2xl font-bold ml-8 ">Received Capsule</div>
            <ListCapsules />
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

export default Dashboard;
