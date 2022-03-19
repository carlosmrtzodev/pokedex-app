import Link from "next/link";

const Buttons = ({ icon, text, url, type }) => {
  return (
    <>
      <Link href={url}>
        <a>
          <button className={`btn ${type}`}>
            {icon} {text}
          </button>
        </a>
      </Link>
    </>
  );
};

export default Buttons;
