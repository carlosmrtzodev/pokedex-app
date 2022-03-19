import { useEffect, useState } from "react";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Top = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <div className="top">
        {showButton && (
          <button onClick={scrollToTop} className="top__icon">
            <FontAwesomeIcon icon={faAnglesUp} />
          </button>
        )}
      </div>
    </>
  );
};

export default Top;
