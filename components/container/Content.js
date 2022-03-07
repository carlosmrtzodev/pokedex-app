const Content = ({ children }) => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="transition-all ease-in-out bg-dark border-dark dark:border-red text-center drop-shadow-2xl rounded-3xl duration-300 border-2 p-8">
          {children}
        </div>
      </div>
    </>
  );
};

export default Content;
