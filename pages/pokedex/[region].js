import Head from "next/head";
import { useRouter } from "next/router";
import List from "../../components/pages/List";
import Buttons from "../../components/elements/Buttons";
import Container from "../../components/container/Container";

export default function Region({ lists }) {
  const router = useRouter();
  const { region } = router.query;

  return (
    <>
      <Head>
        <title className="capitalize">Pokédex - {region}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Container>
        <div className="pt-20 lg:pt-4 pb-12">
          <h1 className="font-sans font-bold text-center text-2xl mb-4">
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
    : null;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon${filter}`);
  const data = await response.json();

  return {
    props: { lists: data.results },
  };
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
