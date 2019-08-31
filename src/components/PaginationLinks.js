import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const PaginationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

const PaginationList = styled.ul`
  margin-top: 0;
  display: flex;
  justify-content: center;

  a {
    &[aria-current="true"] {
      background-color: #333;
      color: #fff;
    }
  }

  .visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: auto;
    margin: 0;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
  }
`;

const LinkContainer = styled.div`
  display: block;
  padding: 0.5em 1em;
  border: 1px solid #999;
  border-radius: 0.2em;
  text-decoration: none;

  &[aria-current="true"] {
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

  const links = [];
  for (let i = 1; i < numPages && i <= 5; i++) {
    links.push(
      <li>
        <LinkContainer>
          <Link to={`/films/${i}`} aria-current={i === currentPage}>
            {i}
          </Link>
        </LinkContainer>
      </li>
    );
  }

  const StyledLink = styled(props => <Link {...props} />)`
    text-decoration: none;
  `;
  const prevLink = currentPage - 1 <= 1 ? null : prevPage;
  console.log("prevLink", currentPage - 1 > 1);

  return (
    // <nav>
    //   <PaginationList>
    //     <li>
    //       <LinkContainer>
    //         {currentPage > 1 ? <Link to={prevLink}>«</Link> : <span>«</span>}
    //       </LinkContainer>
    //     </li>
    //     {links}
    //     <li>
    //       <LinkContainer>
    //         {currentPage < numPages ? (
    //           <Link to={nextPage}>»</Link>
    //         ) : (
    //           <span>«</span>
    //         )}
    //       </LinkContainer>
    //     </li>
    //   </PaginationList>
    // </nav>
    <PaginationContainer aria-label="pagination">
      {!isFirst && (
        <LinkContainer style={{ marginRight: `auto` }}>
          {currentPage > 1 ? (
            <StyledLink to={prevLink}>«</StyledLink>
          ) : (
            <span>«</span>
          )}
        </LinkContainer>
      )}
      {!isLast && (
        <LinkContainer style={{ marginLeft: `auto` }}>
          {currentPage < numPages ? (
            <StyledLink to={nextPage}>»</StyledLink>
          ) : (
            <span>«</span>
          )}
        </LinkContainer>
      )}
    </PaginationContainer>
  );
}

export default PaginationLinks;
