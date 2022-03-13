import useDarkMode from "../../Hooks/useDarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";

const Toggle = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <>
      <div className="flex transition-all ease-in-out bg-red rounded-full duration-300 hover:bg-dred">
        {colorTheme === "light" ? (
          <FontAwesomeIcon
            icon={faSun}
            onClick={() => setTheme("light")}
            className="cursor-pointer text-light text-2xl p-2"
          />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            onClick={() => setTheme("dark")}
            className="cursor-pointer text-light text-2xl p-2"
          />
        )}
      </div>
    </>
  );
};

export default Toggle;
