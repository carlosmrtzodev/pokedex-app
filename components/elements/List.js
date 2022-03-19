import Card from "./Card";
import Link from "next/link";

const List = ({ name, number }) => {
  return (
    <>
      <Link href={`/pokemon/${number}`}>
        <a>
          <Card pokemon={name} pokedexnumber={number} />
        </a>
      </Link>
    </>
  );
};

export default List;
