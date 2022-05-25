import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";
function AboutIconLink() {
  const location = useLocation();
  return (
    location.pathname === "/" && (
      <div className='about-link'>
        <Link to='/about'>
          <FaQuestion size={30} />
        </Link>
      </div>
    )
  );
}

export default AboutIconLink;
