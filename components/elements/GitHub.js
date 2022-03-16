import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GitHub = () => {
  return (
    <>
      <Link href="https://github.com/carlosmrtzodev" passHref>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-2xl text-bckg dark:text-light hover:text-hover transition-all ease-in-out duration-200"
        >
          carlosmrtzodev <FontAwesomeIcon icon={faGithub} />
        </a>
      </Link>
    </>
  );
};

export default GitHub;
