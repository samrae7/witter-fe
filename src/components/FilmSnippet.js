import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
`;

const Image = styled.img`
  width: 100%;
`;

const FilmSnippet = ({ film, slug }) => {
  return (
    <>
      <StyledLink to={slug}>
        <Image
          src={`https://image.tmdb.org/t/p/w300/${film.backdrop_image}`}
          alt={film.name}
        />
        {film.name}
      </StyledLink>
    </>
  );
};

export default FilmSnippet;
