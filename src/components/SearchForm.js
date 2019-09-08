import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Dropdown } from "semantic-ui-react";
import { navigate } from "gatsby";

// TODO pass custom icon so that icon changes to X when open
// const Icon = () => <i class="search icon"></i>;

function SearchForm() {
  const data = useStaticQuery(graphql`
    query searchDataQuery {
      allReview(sort: { fields: film___name }) {
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
      text: film.name,
      value: fields.slug,
    };
  });

  // I don't want the top list item to automatically show in search box
  films.unshift({
    key: "placeholder",
    text: "Search here",
    value: "",
    active: true,
    style: {
      display: "none",
    },
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
