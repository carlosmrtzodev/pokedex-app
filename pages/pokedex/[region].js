import { useRouter } from "next/router";
import List from "../../components/pages/List";
import Top from "../../components/elements/Top";
import GitHub from "../../components/elements/GitHub";
import Button from "../../components/elements/button";
import Toggle from "../../components/elements/Toggle";
import Container from "../../components/container/Container";

export default function Region({ lists }) {
  const router = useRouter();
  const { region } = router.query;

  return (
    <>
      <Container>
        <div className="fixed right-0 top-0 m-2">
          <Toggle />
        </div>

        <div className="container flex flex-col w-2/3 md:w-4/5 mx-auto gap-12">
          <div className="mt-20 lg:mt-2">
            <div className="text-center mb-8 lg:mb-2">
              <GitHub />
            </div>

            <h1 className="font-mono font-bold text-2xl md:text-3xl mb-4">
              National Pokédex of {region}
            </h1>

            <div className="w-48">
              <Button
                text="Go Back"
                url="/"
                color="light"
                bg="red"
                hover="dred"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-8">
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
        </div>

        <Top />
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
