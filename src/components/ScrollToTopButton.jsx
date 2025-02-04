import { useEffect, useState } from "react";
import FuseeLogo from '/assets/logos/fusee-logo.webp';


function ScrollToTopButton ({ targetRef })  {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const toggleVisibility = () => {
      setVisible(window.scrollY > 1500); // buttonReveal after first scrolls
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

  const scrollToTarget = () => {
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='z-index1000'>
      <button  onClick={scrollToTarget}
      className= {` scrollToTopButton d-flex flex-row all-center ${visible ? 'show' : 'hide'}`}
      >
        <img src={FuseeLogo} className='m-0 ' />
        Remonter
      </button>
    </div>

  );
};

export default ScrollToTopButton;