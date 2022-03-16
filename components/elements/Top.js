import { useEffect, useState } from "react";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Top = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <button
          onClick={scrollToTop}
          className="text-2xl text-light bg-red hover:bg-hover animate-bounce hover:animate-none transition-all ease-in-out duration-200 rounded-tr-full rounded-tl-full p-2 "
        >
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </>
  );
};

export default Top;
