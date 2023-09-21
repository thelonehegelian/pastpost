import FileUploader from '../../components/FileUploader';
import '../../../styles/style.css';
import Image from 'next/image';
import tick from '../../../public/tick.svg';


export default function uploadFile(): JSX.Element {

  return (
    <>
      <div className="upload  w-full  ">
        <div className="p-20 px-28 flex flex-row">
          <div className="flex mx-1 ">
            <Image src={tick} alt="tick" />
          </div>
          <div className=" flex flex-col gap-y-1">
            <h2 className="text-xl font-bold">Your media</h2>
            <p className="text "> This is your time capsule</p>
          </div>
        </div>
        <div className=" ">
          <FileUploader />
        </div>
      </div>
    </>
  );
}
