import Link from "next/link";
import Image from "next/image";
import pokeballAlt from "../../assets/pokeball-alt.png";

const Button = ({ text, url, color, bg, hover }) => {
  return (
    <>
      <Link href={url}>
        <a>
          <button
            className={`relative font-sans capitalize transition ease-in-out text-${color} bg-${bg} rounded-br-full rounded-tr-full text-xl md:text-lg duration-300 w-full gap-4 p-1 hover:bg-${hover} hover:scale-105`}
          >
            {text}

            <figure className="absolute right-2 top-1.5">
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

export default Button;
