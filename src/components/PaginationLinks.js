import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

function PaginationLinks({ currentPage, numPages }) {
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage =
    currentPage - 1 === 1 ? "/" : `/films/${(currentPage - 1).toString()}`;
  const nextPage = `/films/${(currentPage + 1).toString()}`;
  return (
    <PaginationContainer>
      {!isFirst && (
        <Link to={prevPage} rel="prev">
          ← Previous Page
        </Link>
      )}
      {!isLast && (
        <Link to={nextPage} rel="next">
          Next Page →
        </Link>
      )}
    </PaginationContainer>
  );
}

export default PaginationLinks;
