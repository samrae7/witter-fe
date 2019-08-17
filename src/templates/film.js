import React from "react";
import Layout from "../components/layout";
export default ({ data }) => {
  const {
    review: { film, date },
  } = data;
  return (
    <Layout>
      <h2>{film.name}</h2>
      <p>Reviewed on {date}</p>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    review(fields: { slug: { eq: $slug } }) {
      id
      youTubeVideoId
      date(formatString: "DD MMMM YYYY")
      film {
        name
        poster_id
      }
    }
  }
`;
