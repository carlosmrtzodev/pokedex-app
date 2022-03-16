import useDarkMode from "../../Hooks/useDarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Toggle = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <>
      <div className="flex bg-red hover:bg-hover transition-all ease-in-out duration-200 rounded-full">
        {colorTheme === "light" ? (
          <FontAwesomeIcon
            icon={faSun}
            onClick={() => setTheme("light")}
            className="cursor-pointer text-2xl text-light p-2"
          />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            onClick={() => setTheme("dark")}
            className="cursor-pointer text-2xl text-light p-2"
          />
        )}
      </div>
    </>
  );
};

export default Toggle;
