import Head from "next/head";
import Image from "next/image";
import Buttons from "../../components/elements/Buttons";
import Content from "../../components/container/Content";
import Container from "../../components/container/Container";

export default function Pokemon({ data }) {
  var region = "";
  data.id <= 151
    ? (region = "kanto")
    : data.id <= 251 && data.id > 151
    ? (region = "johto")
    : data.id <= 386 && data.id > 251
    ? (region = "hoenn")
    : data.id <= 493 && data.id > 386
    ? (region = "sinnoh")
    : "/";

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#E54222" />
        <meta property="og:title" content="Pokédex App" />
        <meta property="og:url" content="pokedex-app-rouge.vercel.app/" />
        <meta property="og:image" content="/OG image.png" />
        <meta
          property="og:description"
          content="Pokédex App in Next.js, Tailwind CSS and PokéAPI REST."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="es_ES" />
        <link rel="apple-touch-icon" href="/Logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Pokédex - {capitalizeFirstLetter(data.name)}</title>
      </Head>

      <Container>
        <Content>
          <div className="w-2/3 mx-auto">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt="Icons made by Freepik"
              width={200}
              height={200}
            />
          </div>

          <div className="my-4">
            <h1 className="font-sans font-bold capitalize text-2xl">
              {data.name}
            </h1>
          </div>

          <div className="flex flex-col font-mono text-left text-lg gap-4">
            {data.abilities.map((ability) => (
              <p
                key={ability.ability.name}
                className="capitalize text-center bg-red text-light w-full rounded-br-full rounded-tr-full px-4 py-1"
              >
                {ability.ability.name}
              </p>
            ))}
          </div>

          <div className="flex gap-4">
            {data.types.map((type) => (
              <p
                key={type.type.name}
                className={`font-mono text-lg capitalize ${
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
                } w-full rounded-br-full rounded-tr-full px-4 py-1 my-4`}
              >
                {type.type.name}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4">
            <Buttons text="Go Back" url={`/pokedex/${region}`} />
          </div>
        </Content>
      </Container>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${params.id}`
  );

  try {
    const data = await response.json();

    if (!data) {
      return { notFound: true };
    }

    return { props: { data } };
  } catch (data) {
    return { notFound: true };
  }
};

export const getStaticPaths = async () => {
  const paths = [{ params: { id: "1" } }];
  return {
    paths,
    fallback: "blocking",
  };
};
