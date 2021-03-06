/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import "typeface-clear-sans";

import Header from "./header";
import SearchForm from "./SearchForm";
import { IconContext } from "react-icons";

import "semantic-ui-css/semantic.min.css";
import "./layout.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          margin: `0 auto`,
          maxWidth: 960,
          position: `relative`,
          minHeight: `100vh`,
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <SearchForm />
        <main
          style={{
            display: `flex`,
            flexDirection: `column`,
            flex: `1 0 auto`,
            paddingTop: `0.8rem`,
          }}
        >
          {children}
        </main>
        <footer
          style={{
            fontSize: `0.5em`,
            paddingLeft: `20px`,
            bottom: 0,
            padding: `10px`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </IconContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
