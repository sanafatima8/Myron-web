import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeMenu = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu();
    }
  }, []);

  return (
    <nav className={`navbar ${navActive ? "active" : ""}`}>
      <div>
        <img src="./img/LOGO.svg" alt="me" className='logo'/>
      </div>
      <a
        className={`nav__hamburger ${navActive ? "active" : ""}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? "active" : ""}`}>
        <ul>
          <li>
            <ScrollLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={400} 
              to="heroSection"
              className="navbar--content"
            
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}  
              to="study"
              className="navbar--content"
              
            >
              My Work
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}  
              to="Bento"
              className="navbar--content"
              
            >
              Bento Blog
               </ScrollLink>
          </li>
          <li>
            <ScrollLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={400} 
              to="affiliate"
              className="navbar--content"
              
            >
              Affiliate Referral
            </ScrollLink>
          </li>
          <li>
            <a href="./Store"
             onClick={closeMenu}
             activeClass="navbar--active-content"
            
             
             className="navbar--content"
            > 
            
            My Store
            </a>
  
          </li>
          {/* "Get in touch" link inside the list when in hamburger mode */}
          {navActive && (
            <ScrollLink
              onClick={closeMenu}
              activeClass="navbar--active-content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={400}  
              to="Contact"
              className="navbar--content"
             
            >
              Get in touch
            </ScrollLink>
          )}
        </ul>
      </div>
      {/* "Get in touch" link outside the list when not in hamburger mode */}
      {!navActive && (
        <ScrollLink
          onClick={closeMenu}
          activeClass="navbar--active-content"
          spy={true}
          smooth={true}
          offset={-70}
          duration={400}  
          to="Contact"
          className="btn btn-outline-primary"
          
        >
          Get in touch
        </ScrollLink>
      )}
    </nav>
  );
}

export default Navbar;
