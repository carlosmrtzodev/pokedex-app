import Link from "next/link";

const Credits = () => {
  return (
    // <div className="absolute top-0 left-0 w-2/5 h-screen bg-red">Hola</div>
    <div>
      <div className="absolute left-0 bottom-0 p-4">
        <h2 className="font-sans text-light text-xl">
          Made by:{" "}
          <Link href="https://github.com/carlosmrtzodev">
            <a className="font-bold transition delay-150 duration-300 hover:text-red">
              carlosmrtzodev
            </a>
          </Link>
        </h2>
      </div>

      <div className="absolute right-0 bottom-0 p-4">
        <p className="font-sans text-right text-light text-md">
          API used:{" "}
          <Link href="https://pokeapi.co/">
            <a className="font-bold transition delay-150 duration-300 hover:text-red">
              PokéAPI
            </a>
          </Link>
        </p>

        <p className="font-sans text-right text-light text-md">
          Pokémon icons created by:{" "}
          <Link href="https://www.flaticon.com/free-icons/pokemon">
            <a className="font-bold transition delay-150 duration-300 hover:text-red">
              Freepik - Flaticon
            </a>
          </Link>
        </p>

        <p className="font-sans text-right text-light text-md">
          Pokémon Backgrounds used:{" "}
          <Link href="https://www.pokemon.com/us/pokemon-virtual-backgrounds/">
            <a className="font-bold transition delay-150 duration-300 hover:text-red">
              Pokémon Virtual Backgrounds
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Credits;
