import Head from "next/head";
import App from "../../components/container/App";
import Content from "../../components/elements/Content";

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

  function capitalize(string) {
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
        <meta property="og:image" content="/OGimage.png" />
        <meta
          property="og:description"
          content="Pokédex App in Next.js, Tailwind CSS and PokéAPI REST."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="es_ES" />
        <link rel="apple-touch-icon" href="/Logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Pokédex | {capitalize(data.name)}</title>
      </Head>

      <App>
        <Content
          title={data.name}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
          component="pokemon"
          abilities={data.abilities}
          types={data.types}
          region={region}
        />
      </App>
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
