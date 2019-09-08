import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Dropdown } from "semantic-ui-react";
import { navigate } from "gatsby";

function SearchForm() {
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

  const films = reviews.map(r => {
    const { film, fields } = r.node;
    return {
      key: film.name,
      text: name,
      value: fields.slug,
    };
  });

  return (
    <Dropdown
      placeholder="Search here"
      fluid
      search
      selection
      options={films}
      onChange={(event, data) => navigate(data.value)}
      selectOnNavigation={false}
      selectOnBlur={false}
    />
  );
}

export default SearchForm;
