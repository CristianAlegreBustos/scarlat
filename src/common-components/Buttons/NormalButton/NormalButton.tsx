
interface ButtonProps {
  isLoading?: boolean;
  text:string;
  onClick?: () => void;
}
const NormalButton= ({ isLoading,text,onClick}:ButtonProps) => {
  return (
    <button onClick={onClick} className="ml-4 bg-amber-500 rounded py-2 px-4" type="submit">
      {isLoading ? (
        <span className="animate-pulse text-2xl">...</span>
      ) : (
        text
      )}
    </button>
  );
};

export default NormalButton;