import Image from "next/image";

const Card = ({ pokemon, pokedexnumber }) => {
  return (
    <>
      <div className="card__container">
        <span className="card__container-body">
          <p className="card__container-body_text">
            #{pokedexnumber}{" "}
            <figure className="card__container-body_pokeball">
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
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokedexnumber}.svg`}
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
