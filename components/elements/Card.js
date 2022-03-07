import Image from "next/image";
import pokeballAlt from "../../assets/pokeball-alt.png";

const Card = ({ pokemon, pokedexnumber }) => {
  return (
    <>
      <div className="flex justify-between items-center transition-all ease-in-out bg-red border-dred w-full drop-shadow-xl rounded-tr-full rounded-br-full duraion-300 border-4 pl-4 hover:bg-dred">
        <span className="capitalize">
          <div className="font-mono font-normal text-lg">
            <p className="flex items-center gap-4">
              #{pokedexnumber}{" "}
              <Image
                src={pokeballAlt}
                alt="Icons made by Freepik"
                width={20}
                height={20}
                className="animate-spin"
              />
            </p>
            <p>{pokemon}</p>
          </div>
        </span>

        <div className="bg-light rounded-full p-2">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${pokedexnumber}.png`}
            alt={pokemon}
            width={75}
            height={75}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
