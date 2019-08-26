import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { getBackdropImage } from "../utils/image.utils";

const StyledLink = styled(props => <Link {...props} />)`
  text-decoration: none;
`;

const Image = styled.img`
  width: 100%;
`;

const Card = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`  
  font-size: 1.1em;
  margin: 0;
`;

const TitleWrapper = styled.div`
  color: black;
  padding: 0.5em;
`;

const FilmSnippet = ({ film, slug, date }) => {
  return (
    <>
      <StyledLink to={slug}>
        <Card>
          <Image src={getBackdropImage(film.backdrop_image)} alt={film.name} />
          <TitleWrapper>
            <Title>{film.name}</Title>
            Reviewed on {date}
          </TitleWrapper>
        </Card>
      </StyledLink>
    </>
  );
};

export default FilmSnippet;
