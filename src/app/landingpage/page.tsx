import MessageForm from '../../components/landingPage/MessageForm';

interface MessageProps {
  text: string;
}
// @dev why are the messageProps needed?
const Message: React.FC<MessageProps> = ({ text }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <MessageForm />
    </div>
  );
};

export default Message;
