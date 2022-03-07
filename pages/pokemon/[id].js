import Image from "next/image";
import Button from "../../components/elements/Buttons";
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

  return (
    <>
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
            <h1 className="font-sans capitalize font-bold text-2xl">
              {data.name}
            </h1>
          </div>

          <div className="flex flex-col font-mono text-left text-lg gap-4">
            {data.abilities.map((ability) => (
              <p
                key={ability.ability.name}
                className="capitalize bg-light text-dark text-center w-full rounded-br-full rounded-tr-full px-4 py-1"
              >
                {ability.ability.name}
              </p>
            ))}
          </div>

          <div className="flex gap-4">
            {data.types.map((type) => (
              <p
                key={type.type.name}
                className={`font-mono capitalize bg-${type.type.name} text-lg w-full rounded-br-full rounded-tr-full px-4 py-1 my-4`}
              >
                {type.type.name}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4">
            <Button text="Go Back" url={`/pokedex/${region}`} />
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
  const data = await response.json();

  return { props: { data } };
};

export const getStaticPaths = async () => {
  const paths = [{ params: { id: "1" } }];
  return {
    paths,
    fallback: "blocking",
  };
};
