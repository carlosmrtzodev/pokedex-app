import Link from "next/link";

const Credits = ({ text, link, url }) => {
  return (
    <>
      <p className="font-mono text-lg">
        {text} {""}
        <Link href={url} passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-red transition-all ease-in-out duration-200"
          >
            {link}
          </a>
        </Link>
      </p>
    </>
  );
};

export default Credits;
