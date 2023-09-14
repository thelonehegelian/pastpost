import "../../../styles/landingpage.css"
import Link from 'next/link';
import Image from 'next/image';

export default function newlandingpage() {
  return (
    <><div className="container">
      <div className="Navbar flex p-10 justify-center">
        {/* Logo */}
        <div className="flex-1">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        </div>
        {/* Links container*/}
        {/* TODO make a single component for links */}
        <div className="flex-1 flex justify-center items-center">

          <Link href="/createcapsule" className="flex justify-center text-black text-lg pr-8">
            Create capsule
          </Link>

          <Link href="/about" className="flex justify-center text-black text-lg pl-8 pr-8">
            About
          </Link>

          <Link href="/faqs" className="text-black text-lg pl-8">
            FAQs
          </Link>
        </div>
        {/* Connect Wallet */}
        {/* TODO connect with wagmi */}
        {/* TODO separate this button into a component */}
        <div className="flex-1 flex justify-end items-center pr-8">
          <button className="btn btn-primary">Connect Wallet</button>
        </div>
      </div>
      <div className="Footer"></div>
      <div className="Left pl-20">
        <div className="flex-1"></div>
        <div className="flex-1">
          <div className="pl-40">
            <h1 className="text-black text-5xl pb-4">
              The Greatest Way to Remember the Past
            </h1>
            <p className="text-gray-500">
              Create a time capsule for you, friend and family. You will be able to set up when and who can open this valuable chest
            </p>
          </div>
        </div>
        {/* buttons */}
        <div className="flex-1 justify-center flex ">
          <Link href="/createcapsule">
            <button className="btn btn-active btn-primary mr-10">Create Capsule</button>
          </Link>
          <Link href="dashboard">
            <button className="btn btn-outline text-gray-600">Open Capsule</button>
          </Link>
        </div>
      </div>

      <div className="Right">
        <div className="p-20 flex justify-end">
          <Image src="/handclock.svg" alt="handclock" width={500} height={500} />
        </div>
      </div>
    </div></>
  )
}
