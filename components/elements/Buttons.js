import Link from "next/link";

const Buttons = ({ icon, text, url }) => {
  return (
    <>
      <Link href={url}>
        <a>
          <button className="btn">
            {icon} {text}
          </button>
        </a>
      </Link>
    </>
  );
};

export default Buttons;
