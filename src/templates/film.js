import React from "react";
import { graphql } from "gatbsy";
import Layout from "../components/layout";
import Video from "../components/video";
import styled from "styled-components";
import { getBackdropImage, getPosterImage } from "../utils/image.utils";

const PosterFrame = styled.div`
  position: absolute;
  bottom: 10px;
  left: 20px;
`;

const FilmFrame = styled.div`
  position: relative;
`;

const FilmTitleFrame = styled.div`
  padding: 1em;
  padding-left: calc(26vw + 40px);
`;

const FilmTitle = styled.h2`
  margin: 0;
  font-size: 1em;
`;

const ReviewDate = styled.span`
  font-size: 0.7em;
`;

export default ({ data }) => {
  const {
    review: { film, date, youTubeVideoId: videoId },
  } = data;
  return (
    <Layout>
      <FilmFrame>
        <Image alt={film.name} src={getBackdropImage(film.backdrop_image)} />
        {film.poster && (
          <PosterFrame>
            <img alt={film.name} src={getPosterImage(film.poster)} />
          </PosterFrame>
        )}
        <FilmTitleFrame>
          <FilmTitle>{film.name}</FilmTitle>
          <ReviewDate>Reviewed on {date}</ReviewDate>
        </FilmTitleFrame>
      </FilmFrame>

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
