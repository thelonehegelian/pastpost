import MessageForm from '../../components/landingPage/MessageForm';
interface MessageProps {
  text: string;
}

const Message: React.FC<MessageProps> = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <MessageForm />
    </div>
  );
};

export default Message;
