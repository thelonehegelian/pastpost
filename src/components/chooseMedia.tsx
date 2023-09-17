import Image from 'next/image';
import Link from 'next/link';

interface ChooseMediaProps {
  image: string;
  title: string;
  description: string;
  buttonText: string;

  onClick: () => void;
}

export default function ChooseMedia({
  image,
  title,
  description,
  buttonText,
}: ChooseMediaProps): JSX.Element {
  return (
    <div className="flex h-56  w-4/6  rounded-l ">
      <div className="  h-full w-96 rounded-xl">
        <Image src={image} alt={image} />
      </div>

      <div className="  h-60 w-full p-6  flex flex-col bg-card">
        <h1 className="text-2xl extra-bold my-2 ">{title}</h1>
        <p className="text">{description}</p>
        <Link href="/uploadfile">
          <button className="btn btn-outline btn-primary my-auto mt-4 w-40 rounded-3xl">
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
}
