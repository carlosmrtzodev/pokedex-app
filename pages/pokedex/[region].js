import Head from "next/head";
import { useRouter } from "next/router";
import App from "../../components/container/App";
import Top from "../../components/elements/Top";
import List from "../../components/elements/List";
import Buttons from "../../components/elements/Buttons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Region({ lists }) {
  const router = useRouter();
  const { region } = router.query;

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
        <title>Pokédex | {capitalize(region)}</title>
      </Head>

      <App>
        <div className="region__container">
          <h1 className="region__container-title">
            National Pokédex of{" "}
            <strong className="region__container-title_strong">{region}</strong>
          </h1>

          <div className="region__container-button">
            <Buttons
              icon={<FontAwesomeIcon icon={faArrowLeft} />}
              text="Go Back"
              url="/"
            />
          </div>
        </div>

        <div className="region__container-list">
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
      </App>

      <Top />
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
