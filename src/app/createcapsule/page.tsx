import "../../../styles/style.css"
import "../../../styles/createCapsule.css"
import Image from 'next/image'
export default function CreateCapsuleFormPage(): JSX.Element {
  return (
    <div className="background flex flex-col">
      {/* top container */}

      <div className="w-full h-2/3 flex bg-sky-100">
        <div className="text-black w-1/2 flex flex-col justify-end">
          {/* HEADING AND SUBHEADING */}
          <div className="pl-80 pb-20">
            <h1 className="font-medium text-md pb-6">
              Almost There!
            </h1>
            <div className="font-medium text-2xl">
              <span> Let's review your</span>
              <br />
              <span>time capsule</span>
            </div>
          </div>
        </div>
      </div>
      {/* bottom container */}
      <div className="w-full h-3/5 bg-white pl-40 pr-40 pt-10 pb-40">
        <div className=" w-1/2 flex flex-col  h-full">
          <div className="w-1/2  mb-10 flex flex-col justify-center h-1/4 pl-28">
            <div className="flex p-4">
              <Image src="/circleCheck.svg" alt="check circle" width={30} height={30} className="pr-2" />
              <p className="text-black font-medium">Your media</p>
            </div>
            <p className="text-gray-500 pl-12">These are your time capsules</p>
          </div>
          <div className="relative w-full h-full">
            <Image src="/capsuleImages.svg" alt="capsules" fill={true} />
          </div>

        </div>
      </div>

      {/* TODO separate into component */}

      {/* form container */}
      <div className="formContainer rounded-xl">
        <h1 className="text-black font-semibold text-2xl pb-4">
          Who will get this time capsule
        </h1>
        {/* Section */}
        <div>
          <h3 className="text-black font-medium text-md pb-4">
            Sender Info
          </h3>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email*</span>
            </label>
            <input type="text" placeholder="jdoe@gmail.com" className="input input-bordered w-full max-w-xs bg-gray-50" />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Wallet or ENS*</span>
            </label>
            <input type="text" placeholder="0x... or myEthereum.eth" className="input input-bordered w-full max-w-xs bg-gray-50" />
          </div>
        </div>
        {/* Section */}
        <div>
          <h3 className="text-black font-medium text-md pb-4 pt-8">
            Receiver Info
          </h3>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input type="text" placeholder="joe doe" className="input input-bordered w-full max-w-xs bg-gray-50" />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email*</span>
            </label>
            <input type="text" placeholder="jdoe@gmail.com" className="input input-bordered w-full max-w-xs bg-gray-50" />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <input type="text" placeholder="Write a short message" className="input input-bordered w-full max-w-xs bg-gray-50" />
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Wallet or ENS*</span>
            </label>
            <input type="text" placeholder="0x... or myEthereum.eth" className="input input-bordered w-full max-w-xs bg-gray-50" />
          </div>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Date*</span>
          </label>
          <input type="text" placeholder="31/12/2023" className="input input-bordered w-full max-w-xs bg-gray-50" />
        </div>
        <div className="pt-12">
          <button className="btn btn-primary">Create Capsule</button>

        </div>

      </div>
    </div >
  )

}


