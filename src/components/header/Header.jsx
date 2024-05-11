import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./Header.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {

  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const controlNavbar = () => {
    if (window.scrollY > 200 && !mobileMenu)  {
      if (window.scrollY > lastScrollY) {
        setShow("hide");
      } else {
        setShow("show");
      }
    }
    else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  }

  useEffect(() => {
    window.scrollTo(0,0)
  }, [Location])
  
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])
  const opensearch = () => {
    setShowSearch(true)
    setMobileMenu(false)

  }
  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false)
  }

  const navigationHandler = (type) => {
    if (type === 'movie') {
      navigate('/explore/movie')
    } else {
      navigate('/explore/tv')
    }
    setMobileMenu(false)
  }
  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false)
      }, 1000);
    }
  };

  return (
    <header className={`header ${mobileMenu ? 'mobileView' : ''} ${show}`}>
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => { navigationHandler('movie') }}>Movies</li>
          <li className="menuItem" onClick={() => { navigationHandler('tv') }}>TV Shows</li>
          <li className="menuItem" onClick={opensearch}>
            <HiOutlineSearch />
          </li>
        </ul>
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={opensearch} />
          {mobileMenu ? (<VscChromeClose onClick={() => setMobileMenu(false)} />) : (<SlMenu onClick={openMobileMenu} />)}

        </div>
      </ContentWrapper>
      {showSearch && <div className="searchBar">
        <ContentWrapper>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
            />
            <VscChromeClose onClick={() => setShowSearch(false)} />
          </div>
        </ContentWrapper>
      </div>}
    </header>
  )
}

export default Header
