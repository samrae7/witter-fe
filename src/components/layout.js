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
    <>
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
        <main
          style={{
            display: `flex`,
            flexDirection: `column`,
            flex: `1 0 auto`,
          }}
        >
          {children}
        </main>
        <footer
          style={{
            fontSize: `0.5em`,
            paddingLeft: `20px`,
            bottom: 0,
            paddingBottom: `10px`,
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
