import Link from "next/link";

const Buttons = ({ text, url }) => {
  return (
    <>
      <Link href={url}>
        <a>
          <button className="font-mono text-lg capitalize bg-red border-hover hover:bg-hover transition-all ease-in-out duration-300 hover:scale-105 w-full border-2 rounded-br-full rounded-tr-full p-2">
            {text}
          </button>
        </a>
      </Link>
    </>
  );
};

export default Buttons;
