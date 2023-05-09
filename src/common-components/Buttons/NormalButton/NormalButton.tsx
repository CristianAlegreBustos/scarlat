const NormalButton= ({ isLoading,text,onClick}:ButtonProps) => {
  return (
    <button onClick={onClick} className="bg-amber-500 rounded py-2 px-4" type="submit">
      {isLoading ? (
        <span className="animate-pulse text-2xl">...</span>
      ) : (
        text
      )}
    </button>
  );
};

export default NormalButton;