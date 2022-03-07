import Link from "next/link";
import Image from "next/image";
import Card from "../elements/Card";

const List = ({ name, number }) => {
  return (
    <>
      <Link href={`/pokemon/${number}`}>
        <a className="hover:animate-bounce">
          <Card pokemon={name} pokedexnumber={number} />
        </a>
      </Link>
    </>
  );
};

export default List;
