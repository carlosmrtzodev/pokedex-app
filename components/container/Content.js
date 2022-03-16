const Content = ({ children }) => {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center bg-bckg border-bckg dark:border-red transition-all ease-in-out duration-200 drop-shadow-2xl rounded-2xl border-2 p-8">
          {children}
        </div>
      </div>
    </>
  );
};

export default Content;
