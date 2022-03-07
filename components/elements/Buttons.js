import Link from "next/link";
import Image from "next/image";
import pokeballAlt from "../../assets/pokeball-alt.png";

const Buttons = ({ text, url }) => {
  return (
    <>
      <Link href={url}>
        <a>
          <button className="relative font-mono capitalize transition-all ease-in-out bg-red border-dred w-full rounded-br-full rounded-tr-full text-lg border-2 duration-300 p-1 hover:bg-dred hover:scale-105">
            {text}

            <figure className="absolute top-2 right-1">
              <Image
                src={pokeballAlt}
                alt="Icons made by Freepik"
                width={20}
                height={20}
              />
            </figure>
          </button>
        </a>
      </Link>
    </>
  );
};

export default Buttons;
