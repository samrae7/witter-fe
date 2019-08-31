import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const PaginationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

const StyledLink = styled(props => <Link {...props} />)`
  display: block;
  padding: 0.5em 1em;
  border: 1px solid #999;
  border-radius: 0.2em;
  text-decoration: none;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

function PaginationLinks({ currentPage, numPages }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 <= 1 ? "/" : `/films/${(currentPage - 1).toString()}`;
  const nextPage = `/films/${(currentPage + 1).toString()}`;

  return (
    <PaginationContainer aria-label="pagination">
      {!isFirst && (
        <StyledLink style={{ marginRight: `auto` }} to={prevPage}>
          «
        </StyledLink>
      )}
      {!isLast && (
        <StyledLink style={{ marginLeft: `auto` }} to={nextPage}>
          »
        </StyledLink>
      )}
    </PaginationContainer>
  );
}

export default PaginationLinks;
