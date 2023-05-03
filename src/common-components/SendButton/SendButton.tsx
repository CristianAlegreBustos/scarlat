
interface SendButtonProps {
  isLoading: boolean;
}
const SendButton: React.FC<SendButtonProps> = ({ isLoading }) => {
  return (
    <button className="ml-4 bg-amber-500 rounded py-2 px-4" type="submit">
      {isLoading ? (
        <span className="animate-pulse text-2xl">...</span>
      ) : (
        'Enviar'
      )}
    </button>
  );
};

export default SendButton;