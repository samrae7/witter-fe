import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import FilmSnippet from "../components/FilmSnippet";
import SEO from "../components/seo";
import styled from "styled-components";

import "typeface-clear-sans";
import "./index.css";

const List = styled.ul`
  margin-top: 0;
`;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <List>
        {data.allReview.edges.map(({ node }) => {
          const { film, fields, date, id } = node;
          return (
            <li key={id}>
              <FilmSnippet film={film} slug={fields.slug} date={date} />
            </li>
          );
        })}
      </List>
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
