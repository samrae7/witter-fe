import React from "react";
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
          const { film, fields, date, id } = node;
          return (
            <li>
              <FilmSnippet
                key={id}
                film={film}
                slug={fields.slug}
                date={date}
              />
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query IndexPageQuery {
    allReview(sort: { fields: date, order: DESC }) {
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
          date(formatString: "DD MMMM YYYY")
        }
      }
    }
  }
`;

export default IndexPage;
