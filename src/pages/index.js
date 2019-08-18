import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import FilmSnippet from "../components/FilmSnippet";
import SEO from "../components/seo";

import "typeface-clear-sans";
import "./index.css";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <ul>
        {data.allReview.edges.map(({ node }) => {
          const { film, fields } = node;
          return (
            <li>
              <FilmSnippet film={film} slug={fields.slug} />
            </li>
          );
        })}
      </ul>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export const query = graphql`
  query IndexPageQuery {
    allReview {
      edges {
        node {
          id
          film {
            id
            name
            backdrop_image
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
