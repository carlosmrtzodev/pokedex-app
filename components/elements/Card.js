import Image from "next/image";

const Card = ({ pokemon, pokedexnumber }) => {
  return (
    <>
      <div className="flex justify-between items-center transition ease-in-out bg-red border-dred drop-shadow-xl rounded-tr-full rounded-br-full duraion-300 border-4 pl-4 hover:bg-dred">
        <span className="font-sans font-bold capitalize text-xl md:text-lg">
          <p>#{pokedexnumber}</p>
          <p>{pokemon}</p>
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
