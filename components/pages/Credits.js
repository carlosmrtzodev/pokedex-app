import Link from "next/link";

const Credits = ({ text, link, url }) => {
  return (
    <>
      <p className="font-mono text-lg">
        {text} {""}
        <Link href={url}>
          <a className="font-bold transition-all ease-in-out duration-300 hover:text-red">
            {link}
          </a>
        </Link>
      </p>
    </>
  );
};

export default Credits;
