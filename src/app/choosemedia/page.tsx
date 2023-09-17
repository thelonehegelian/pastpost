import "../../../styles/style.css";
import ChooseMedia from "../../components/chooseMedia";

const contentTypes = [
  {
    id: 1,
    title: "Send a video to the future",
    image: "video.png",
    description: "Upload a video",
    buttonText: "Upload Video", // Add buttonText property
  },
  {
    id: 2,
    title: "Audio",
    image: "audio.png",
    description: "Upload an audio",
    buttonText: "Upload Audio", // Add buttonText property
  },
  {
    id: 3,
    title: "Image",
    image: "image.png",
    description: "Upload an image",
    buttonText: "Upload Image", // Add buttonText property
  },
  {
    id: 4,
    title: "Text",
    image: "text.png",
    description: "Upload a text",
    buttonText: "Upload Text", // Add buttonText property
  },
];

export default function ChooseMediaPage(): JSX.Element {
  return (
    <div className="background">
      {contentTypes.map((contentType) => (
        <ChooseMedia
          key={contentType.id}
          image={contentType.image}
          title={contentType.title}
          description={contentType.description}
          buttonText={contentType.buttonText} // Pass the buttonText here
        />
      ))}
    </div>
  );
}
