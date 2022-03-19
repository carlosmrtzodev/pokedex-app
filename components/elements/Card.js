import Image from "next/image";

const Card = ({ pokemon, pokedexnumber }) => {
  return (
    <>
      <div className="card__container">
        <span>
          <p className="card__container-text">
            #{pokedexnumber}{" "}
            <figure className="card__container-pokeball">
              <Image
                src="/pokeball-alt.png"
                alt="Icons made by Freepik"
                width={20}
                height={20}
              />
            </figure>
          </p>

          <h3>{pokemon}</h3>
        </span>

        <figure className="card__container-image">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/${pokedexnumber}.png`}
            alt={pokemon}
            width={75}
            height={75}
          />
        </figure>
      </div>
    </>
  );
};

export default Card;
