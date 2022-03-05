{
  /* <div
  key={pokemon.name}
  className="rounded-md flex justify-around items-center drop-shadow-xl bg-red hover:bg-scarlet"
>
  <h2 className="font-mono capitalize text-light">{pokemon.name}</h2>

  <Image
    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url
      .split("/")
      .filter((x) => x)
      .pop()}.png`}
    alt="pokemon.name"
    width={70}
    height={70}
  />
</div>; */
}

import Link from "next/link";

export default function List({ pokemones }) {
  return <Link href="/">Hola</Link>;
}
export const getStaticProps = async () => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
  const data = await response.json();

  return {
    props: { pokemones: data.results },
  };
};

// export const getStaticProps = async () => {
//   const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`);
//   const data = await response.json();

//   return {
//     props: { pokemones: data.results },
//   };
// };

// <div className="grid grid-cols-4 gap-4">
//   {/* {pokemones.map((pokemon) => (
//     <List key={pokemon.name} />
//   ))} */}
// </div>;
