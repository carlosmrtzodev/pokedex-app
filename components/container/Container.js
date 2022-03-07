import Top from "../elements/Top";
import Toggle from "../elements/Toggle";
import GitHub from "../elements/GitHub";

const Container = ({ children }) => {
  return (
    <>
      <div className="transition-all ease-in-out bg-grey dark:bg-dblue duration-300">
        <div className="fixed top-0 right-0 m-4">
          <Toggle />
        </div>
        <div className="absolute top-0 left-0 m-4">
          <GitHub />
        </div>

        <div className="container w-2/3 md:w-4/5 h-full mx-auto">
          {children}
        </div>

        <div className="fixed bottom-0 right-0 m-4">
          <Top />
        </div>
      </div>
    </>
  );
};

export default Container;
