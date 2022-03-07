import Image from "next/image";
import Link from "next/link";
import Button from "../../components/Button";
import { useRouter } from "next/router";

export default function Pokemon({ data }) {
  const router = useRouter();
  console.log(data);
  return (
    <>
      <div className="bg-dark">
        <div className="flex container justify-center items-center h-screen mx-auto">
          <div className="text-center bg-gray drop-shadow-xl rounded-3xl p-6">
            <div className="bg-light rounded-3xl p-4">
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                width={250}
                height={250}
                alt={data.name}
              />
            </div>

            <h1 className="font-sans font-bold capitalize text-center text-light text-3xl m-2">
              {data.name} #{data.id}
            </h1>

            <div className="grid grid-cols-2">
              {data.types.map((type) => (
                <Button name={type.type.name} key={type.type.name} />
              ))}
            </div>

            <Link href={`/pokemon/${data.id + 1}`}>
              <a>
                <Button name="Siguiente" />
              </a>
            </Link>
          </div>
        </div>
      </div>
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
  const paths = [{ params: { id: "1" } }, { params: { id: "2" } }];
  return {
    paths,
    fallback: "blocking",
  };
};
