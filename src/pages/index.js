import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <p>Welcome to the Witter Feed.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <ul>
        {data.allReview.edges.map(review => {
          return (
            <li>
              <Link to={review.node.fields.slug}>{review.node.film.name}</Link>
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
            name
            id
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
