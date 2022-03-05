import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Region({ lists }) {
  const router = useRouter();
  const { region } = router.query;

  return (
    <div className="bg-dark">
      <div className="container mx-auto py-8">
        <h1 className="font-sans capitalize font-bold text-3xl text-light mb-8">
          National Pokédex {region}
        </h1>

        <Link href="/">
          <a className="font-sans transition ease-in-out text-xl text-dark bg-light rounded-br-full rounded-tr-full delay-150 duration-300 py-2 px-8 hover:bg-red hover:text-light">
            Go back
          </a>
        </Link>
      </div>

      <div className="container mx-auto grid grid-cols-4 gap-8 py-8">
        {lists.map((list) => (
          <Link
            href={`/pokemon/${list.url
              .split("/")
              .filter((x) => x)
              .pop()}`}
            key={list.name}
          >
            <a className="flex justify-between items-center transition ease-in-out bg-red drop-shadow-xl rounded-tr-full rounded-br-full delay-150 duraion-300 pl-4 hover:bg-scarlet hover:animate-bounce">
              <span className="font-mono font-semibold capitalize text-light text-lg">
                <p>
                  #
                  {list.url
                    .split("/")
                    .filter((x) => x)
                    .pop()}
                </p>
                <p>{list.name}</p>
              </span>

              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${list.url
                  .split("/")
                  .filter((x) => x)
                  .pop()}.png`}
                alt={list.name}
                width={80}
                height={80}
                className="bg-light rounded-full"
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
export const getStaticProps = async ({ params }) => {
  if (params.region === "kanto") var filter = "?limit=151&offset=0";
  else if (params.region === "johto") var filter = "?limit=100&offset=151";
  else if (params.region === "hoenn") var filter = "?limit=135&offset=251";
  else if (params.region === "sinnoh") var filter = "?limit=107&offset=386";
  else if (params.region === "unova") var filter = "?limit=156&offset=493";

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
    { params: { region: "unova" } },
  ];
  return {
    paths,
    fallback: "blocking",
  };
};
