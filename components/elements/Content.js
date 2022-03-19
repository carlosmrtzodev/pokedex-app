import Image from "next/image";
import Buttons from "./Buttons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  const regions = ["kanto", "johto", "hoenn", "sinnoh"];

  return (
    <>
      <div className="content__container-body_buttons">
        {regions.map((region) => (
          <Buttons key={region} text={region} url={`/pokedex/${region}`} />
        ))}
      </div>
    </>
  );
};

const Error = () => {
  return (
    <>
      <div className="content__container-body_buttons">
        <Buttons
          icon={<FontAwesomeIcon icon={faArrowLeft} />}
          text="Go Back"
          url="/"
        />
      </div>
    </>
  );
};

const Pokemon = ({ abilities, types, region }) => {
  return (
    <>
      <div className="content__container-body_info">
        <div className="content__container-body_info-types">
          {types.map((type) => (
            <h4
              key={type.type.name}
              className={`content__container-body_info-types_type ${
                type.type.name == `normal`
                  ? `bg-normal`
                  : type.type.name == `fire`
                  ? `bg-fire`
                  : type.type.name == `water`
                  ? `bg-water`
                  : type.type.name == `electric`
                  ? `bg-electric`
                  : type.type.name == `grass`
                  ? `bg-grass`
                  : type.type.name == `ice`
                  ? `bg-ice`
                  : type.type.name == `fighting`
                  ? `bg-fighting`
                  : type.type.name == `poison`
                  ? `bg-poison`
                  : type.type.name == `ground`
                  ? `bg-ground`
                  : type.type.name == `flying`
                  ? `bg-flying`
                  : type.type.name == `psychic`
                  ? `bg-psychic`
                  : type.type.name == `bug`
                  ? `bg-bug`
                  : type.type.name == `rock`
                  ? `bg-rock`
                  : type.type.name == `ghost`
                  ? `bg-ghost`
                  : type.type.name == `dragon`
                  ? `bg-dragon`
                  : type.type.name == `dark`
                  ? `bg-dark`
                  : type.type.name == `steel`
                  ? `bg-steel`
                  : type.type.name == `fairy`
                  ? `bg-fairy`
                  : `bg-red`
              }`}
            >
              {type.type.name}
            </h4>
          ))}
        </div>

        <div className="content__container-body_buttons">
          <Buttons
            icon={<FontAwesomeIcon icon={faArrowLeft} />}
            text="Go Back"
            url={`/pokedex/${region}`}
          />
        </div>
      </div>
    </>
  );
};

const Content = ({ title, image, component, abilities, types, region }) => {
  return (
    <>
      <section className="content__container">
        <div className="content__container-body">
          <figure>
            <Image
              src={image}
              alt="Icons made by Freepik, Sprites and Pokémon images by PokéAPI"
              width={200}
              height={200}
            />
          </figure>

          <h1 className="content__container-body_title">{title}</h1>

          {component === "home" ? (
            <Home />
          ) : component === "error" ? (
            <Error />
          ) : component === "pokemon" ? (
            <Pokemon abilities={abilities} types={types} region={region} />
          ) : null}
        </div>
      </section>
    </>
  );
};

export default Content;
