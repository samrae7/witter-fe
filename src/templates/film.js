import React from "react";
import Layout from "../components/layout";
import Video from "../components/video";
import styled from "styled-components";

export default ({ data }) => {
  const {
    review: { film, date, youTubeVideoId: videoId },
  } = data;
  return (
    <Layout>
      <h2>{film.name}</h2>
      <p>Reviewed on {date}</p>
      <img
        alt={film.name}
        src={`https://image.tmdb.org/t/p/w92/${film.poster}`}
      />
      <Image
        alt={film.name}
        src={`https://image.tmdb.org/t/p/w300/${film.backdrop_image}`}
      />
      <Video
        videoSrcURL={`https://www.youtube.com/embed/${videoId}`}
        videoTitle={film.name}
      />
    </Layout>
  );
};

const Image = styled.img`
  width: 100%;
`;

export const query = graphql`
  query($slug: String!) {
    review(fields: { slug: { eq: $slug } }) {
      id
      youTubeVideoId
      date(formatString: "DD MMMM YYYY")
      film {
        name
        poster
        backdrop_image
      }
    }
  }
`;
