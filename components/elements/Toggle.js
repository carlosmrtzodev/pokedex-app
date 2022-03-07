import useDarkMode from "../../Hooks/useDarkMode";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Toggle = () => {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <>
      <div className="flex transition ease-in-out bg-red rounded-full duration-300 hover:bg-dred">
        {colorTheme === "light" ? (
          <FontAwesomeIcon
            icon={faSun}
            onClick={() => setTheme("light")}
            className="text-light cursor-pointer text-3xl md:text-2xl p-2"
          />
        ) : (
          <FontAwesomeIcon
            icon={faMoon}
            onClick={() => setTheme("dark")}
            className="text-light cursor-pointer text-3xl md:text-2xl p-2"
          />
        )}
      </div>
    </>
  );
};

export default Toggle;
