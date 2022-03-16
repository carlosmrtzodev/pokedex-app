import Head from "next/head";
import { useRouter } from "next/router";
import List from "../../components/pages/List";
import Buttons from "../../components/elements/Buttons";
import Container from "../../components/container/Container";

export default function Region({ lists }) {
  const router = useRouter();
  const { region } = router.query;

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
        <title>Pokédex - {capitalizeFirstLetter(region)}</title>
      </Head>

      <Container>
        <div className="pt-20 lg:pt-4 pb-12">
          <h1 className="font-sans font-bold text-center text-2xl text-bckg dark:text-light mb-4">
            National Pokédex of {region}
          </h1>

          <div className="w-48 mx-auto">
            <Buttons text="Go Back" url="/" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-12">
          {lists.map((list) => (
            <List
              name={list.name}
              number={list.url
                .split("/")
                .filter((x) => x)
                .pop()}
              key={list.name}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
export const getStaticProps = async ({ params }) => {
  var filter = "";

  params.region === "kanto"
    ? (filter = "?limit=151&offset=0")
    : params.region === "johto"
    ? (filter = "?limit=100&offset=151")
    : params.region === "hoenn"
    ? (filter = "?limit=135&offset=251")
    : params.region === "sinnoh"
    ? (filter = "?limit=107&offset=386")
    : (filter = "/error");

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon${filter}`);

  try {
    const data = await response.json();

    if (!data) {
      return { notFound: true };
    }

    return { props: { lists: data.results } };
  } catch (data) {
    return { notFound: true };
  }
};

export const getStaticPaths = async () => {
  const paths = [
    { params: { region: "kanto" } },
    { params: { region: "johto" } },
    { params: { region: "hoenn" } },
    { params: { region: "sinnoh" } },
  ];

  return {
    paths,
    fallback: "blocking",
  };
};
