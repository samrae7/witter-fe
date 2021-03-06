import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Menu from "./Menu";

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 0 0 0.6rem`,
        display: `flex`,
        justifyContent: `space-between`,
      }}
    >
      <h1
        style={{
          margin: 0,
          paddingTop: `0.5rem`,
          fontFamily: `typeface-cousine, monospace`,
          fontSize: `1.3em`,
          flexGrow: 1,
        }}
      >
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <Menu />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
