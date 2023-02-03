import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


function ScrollToTop() {
  
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div className="scroll-to-top">
      {showScroll && (
        <div style={{display:"flex",borderRadius:'50%', width: '50px', height:'50px', backgroundColor: 'whitesmoke', opacity: 0.5, justifyContent:"center", alignItems:"center"}} onClick={scrollTop}>
          <FontAwesomeIcon className="iconeAnimado"  icon={faArrowUp} color='grey' size='2x'/>
        </div>
      )}
    </div>
  );
}

export default ScrollToTop;
