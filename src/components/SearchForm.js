import React, { useState } from "react";
import * as JsSearch from "js-search";
import { useStaticQuery, graphql, Link } from "gatsby";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const SearchList = styled.ul`
  list-style: none;
  position: absolute;
  background-color: white;
  width: 100%;
  margin: 0;
  z-index: 1;

  li {
    padding: 0.6rem;
    border-bottom: 1px dotted #999;
  }

  a {
    text-decoration: none;
  }
`;
const StyledInput = styled.input`
  border-radius: 0;
  border: none;

  -webkit-appearance: none;
`;

const InputContainer = styled.div`
  border: 1px dotted #999;
  padding: 0 0 0 0.6rem;
  width: fit-content;

  .icon-container {
    display: inline-block;
  }
`;

function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const data = useStaticQuery(graphql`
    query searchDataQuery {
      allReview {
        edges {
          node {
            id
            film {
              id
              name
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  const reviews = data.allReview.edges;
  var search = new JsSearch.Search(["node", "id"]);
  search.addIndex(["node", "film", "name"]);
  search.addDocuments(reviews);

  const searchData = e => {
    setSearchQuery(e.target.value);
    const queryResult = search.search(e.target.value);
    setSearchResults(queryResult);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <div className="icon-container">
            <FaSearch size={18} color="lightgrey" />
          </div>

          <StyledInput
            id="Search"
            type="search"
            value={searchQuery}
            onChange={searchData}
            placeholder="Search here"
          />
        </InputContainer>
        <SearchList>
          {searchResults.map(result => {
            return (
              <li>
                <Link to={result.node.fields.slug}>
                  {result.node.film.name}
                </Link>
              </li>
            );
          })}
        </SearchList>
      </form>
    </>
  );
}

export default SearchForm;
