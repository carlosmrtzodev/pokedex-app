import Link from "next/link";
import useToggle from "../utils/Toggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faClose } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Credits = () => {
  const [isOn, toggleIsOn] = useToggle();

  return (
    <div
      className={`fixed transition-all ease-in-out h-screen border-r-8 top-0 left-0 ${
        isOn ? "w-1/3" : "w-0"
      } bg-dark border-red`}
    >
      <span
        className="absolute cursor-pointer bg-red text-light text-md rounded-tr-xl rounded-br-xl p-2 top-1/2 -right-8"
        onClick={toggleIsOn}
      >
        {isOn ? (
          <FontAwesomeIcon icon={faClose} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </span>

      <div
        className={`flex flex-col justify-center ease-in-out h-full w-full ${
          isOn ? "scale-100 delay-150" : "scale-0"
        } p-4`}
      >
        <h2 className="font-sans text-light text-2xl mb-4">
          Made by:{" "}
          <Link href="https://github.com/carlosmrtzodev">
            <a className="font-bold transition ease-in-out delay-150 duration-300 hover:text-red">
              carlosmrtzodev <FontAwesomeIcon icon={faGithub} />
            </a>
          </Link>
        </h2>

        <p className="font-sans text-light text-xl mb-2">
          API used: <br />
          <Link href="https://pokeapi.co/">
            <a className="font-bold transition ease-in-out delay-150 duration-300 ml-2 hover:text-red">
              PokéAPI
            </a>
          </Link>
        </p>

        <p className="font-sans text-light text-xl mb-2">
          Pokémon icons created by: <br />
          <Link href="https://www.flaticon.com/free-icons/pokemon">
            <a className="font-bold transition ease-in-out delay-150 duration-300 ml-2 hover:text-red">
              Freepik - Flaticon
            </a>
          </Link>
        </p>

        <p className="font-sans text-light text-xl mb-2">
          Pokémon Backgrounds used: <br />
          <Link href="https://www.pokemon.com/us/pokemon-virtual-backgrounds/">
            <a className="font-bold transition ease-in-out delay-150 duration-300 ml-2 hover:text-red">
              Pokémon Virtual Backgrounds
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Credits;
