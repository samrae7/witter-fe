import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import FilmSnippet from "../components/FilmSnippet";
import SEO from "../components/seo";
import styled from "styled-components";
import PaginationLinks from "../components/PaginationLinks";

import "typeface-clear-sans";
import "../pages/index.css";

const List = styled.ul`
  margin-top: 0;
  flex: 1 0 auto;
`;

const ListItem = styled.li`
  margin-bottom: 1.4em;
  &:last-child {
    margin-bottom: 0;
  }
`;

const FilmList = ({ data, pageContext }) => {
  const { currentPage, numPages } = pageContext;
  const reviews = data.allReview.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <List>
        {reviews.map(({ node }) => {
          const { film, fields, date, id } = node;
          return (
            <ListItem key={id}>
              <FilmSnippet film={film} slug={fields.slug} date={date} />
            </ListItem>
          );
        })}
      </List>
      <PaginationLinks numPages={numPages} currentPage={currentPage} />
    </Layout>
  );
};

export const query = graphql`
  query filmListQuery($skip: Int!, $limit: Int!) {
    allReview(sort: { fields: date, order: DESC }, limit: $limit, skip: $skip) {
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

export default FilmList;
