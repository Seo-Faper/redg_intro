import React, { useState, useEffect } from "react";
import Link from "../Link/Link";
import IconImage from "../../../assets/img/icon.png";
const Nav = () => {
  const [navClass, setNavClass] = useState("");
  const [toggeledNav, settoggeledNav] = useState(false);

  const toggleNav = () => {
    settoggeledNav(!toggeledNav);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let navClass = "";
      if (window.scrollY >= 200) {
        navClass = "scrolled";
      }
      setNavClass(navClass);
    });
  }, []);

  return (
    <nav className={`navbar navbar-expand-md bg-light ${navClass}`}>
      <div className="container">
        <a className="navbar-brand" href="!#">
          <img
            src={IconImage}
            width={"40"}
            height={"40"}
            style={{ marginBottom: "5px", marginRight: "10px" }}
          ></img>
          <span
            style={{
              fontFamily: "Noto sans KR, sans-serif",
              color: "black",
              fontStyle: "bold",
            }}
          >
            ReD
          </span>
          <span
            style={{
              fontFamily: "Noto sans KR, sans-serif",
              color: "#d53232",
              fontStyle: "bold",
            }}
          >
            G
          </span>
        </a>
        <div
          className={`navbar-toggler nav-icon ${(() => {
            if (toggeledNav) return "open";
            return "";
          })()}`}
          onClick={toggleNav}
        >
          <span />
          <span />
          <span />
        </div>

        <div
          className={`collapse navbar-collapse ${(() => {
            if (toggeledNav) return "show";
            return "";
          })()}`}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link target="home" offset={-120} classes="nav-link">
                홈
              </Link>
            </li>
            <li className="nav-item">
              <Link target="about" classes="nav-link">
                소개
              </Link>
            </li>
            <li className="nav-item">
              <Link target="services" classes="nav-link">
                기술과 비전
              </Link>
            </li>
            <li className="nav-item">
              <Link target="blog" classes="nav-link">
                구성원
              </Link>
            </li>
            <li className="nav-item">
              <Link target="map" classes="nav-link">
                찾아오시는 길
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
