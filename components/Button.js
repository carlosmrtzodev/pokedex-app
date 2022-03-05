import Link from "next/link";
import Image from "next/image";
import pokeballAlt from "../assets/pokeball-alt.png";

const Button = ({ name }) => {
  return (
    <Link href={`/pokedex/${name}`}>
      <a>
        <button className="flex font-mono capitalize justify-between items-center transition ease-in-out text-light bg-red rounded-2xl text-xl w-full delay-150 duration-300 p-1 pl-16 pr-2 hover:bg-scarlet">
          {name}

          <Image
            src={pokeballAlt}
            alt="Icons made by Freepik"
            width={20}
            height={20}
          />
        </button>
      </a>
    </Link>
  );
};

export default Button;
