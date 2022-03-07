const Container = ({ children }) => {
  return (
    <>
      <div className="transition-all ease-in-out bg-grey dark:bg-dark duration-300">
        {children}
      </div>
    </>
  );
};

export default Container;
