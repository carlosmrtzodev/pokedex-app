import Link from "next/link";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <>
      <Link href="https://github.com/carlosmrtzodev">
        <a className="font-sans transition-all ease-in-out text-2xl duration-300 hover:text-dred">
          carlosmrtzodev{" "}
          <FontAwesomeIcon icon={faGithub} className="animate-spin" />
        </a>
      </Link>
    </>
  );
};

export default Contact;
