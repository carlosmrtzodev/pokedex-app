import Image from "next/image";
import pokeballAlt from "../../assets/pokeball-alt.png";

const Card = ({ pokemon, pokedexnumber }) => {
  return (
    <>
      <div className="flex justify-between items-center bg-red hover:bg-hover border-hover transition-all ease-in-out duraion-300 w-full drop-shadow-xl rounded-tr-full rounded-br-full border-4 pl-4">
        <span className="capitalize">
          <div className="font-mono font-normal text-lg">
            <p className="flex items-center gap-4">
              #{pokedexnumber}{" "}
              <Image
                src={pokeballAlt}
                alt="Icons made by Freepik"
                width={20}
                height={20}
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
