import Link from "next/link";

const Credits = ({ text, link, url }) => {
  return (
    <>
      <p className="font-mono text-lg text-bckg dark:text-light">
        {text} {""} <br />
        <Link href={url} passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-bckg dark:text-light hover:text-red transition-all ease-in-out duration-200"
          >
            {link}
          </a>
        </Link>
      </p>
    </>
  );
};

export default Credits;
