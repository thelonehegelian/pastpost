import Image from 'next/image';
import '../../../styles/style.css';
import ChooseMedia from '../../components/chooseMedia';
import video from '../../../public/1cmp.svg';
import text from '../../../public/2cmp.svg';
import image from '../../../public/3cmp.svg';
import voice from '../../../public/4cmp.svg';

const contentTypes = [
  {
    id: 1,
    title: 'Send a video to the future',
    image: video,
    description: 'Lorem ipsum dolor sit amet pretium consectetur adipiscing elit. ',
    buttonText: 'Record Video', // Add buttonText property
  },
  {
    id: 2,
    title: 'What would you say?',
    image: text,
    description: 'what do you want to tell someone in 10 year? create your capsule',

    buttonText: 'Start writing', // Add buttonText property
  },
  {
    id: 3,
    title: 'How does the present look for you?',
    image: image,
    description: 'Capture your daily moments for the future and compare what has changed',
    buttonText: 'Take pictures', // Add buttonText property
  },
  {
    id: 4,
    title: 'How will your voice sound later in life?',
    image: voice,
    description: 'Safe a voice message your that person in the future',
    buttonText: 'Record voice ', // Add buttonText property
  },
];

export default function ChooseMediaPage(): JSX.Element {
  return (
    <>
      <div className="container background">
        <div className="Navbar flex pl-4 justify-center ">
          {/* Logo */}
          <div className="flex-1">
            <Image src="/logo.svg" alt="Logo" width={100} height={100} />
          </div>
        </div>
      </div>
      <div className="">
        <div className=" flex gap-x-20 mx-20 my-20  ">
          {contentTypes.slice(0, 2).map((contentType) => (
            <ChooseMedia
              key={contentType.id}
              image={contentType.image}
              title={contentType.title}
              description={contentType.description}
              buttonText={contentType.buttonText} // Pass the buttonText here
            />
          ))}
        </div>
        <div className=" flex gap-x-20  mx-20 my-20  ">
          {contentTypes.slice(2, 4).map((contentType) => (
            <ChooseMedia
              key={contentType.id}
              image={contentType.image}
              title={contentType.title}
              description={contentType.description}
              buttonText={contentType.buttonText} // Pass the buttonText here
            />
          ))}
        </div>
      </div>
    </>
  );
}
