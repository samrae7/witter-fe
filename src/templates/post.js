import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";
import { Breadcrumb } from "semantic-ui-react";

const Container = styled.div`
  padding: 0 1rem;
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  const sections = [
    { key: "Home", content: "Home", href: "/" },
    {
      key: frontmatter.title,
      content: frontmatter.title,
      href: frontmatter.path,
    },
  ];
  return (
    <Layout>
      <Breadcrumb
        style={{ paddingBottom: `0.8rem`, paddingLeft: `0.6rem` }}
        icon="right angle"
        sections={sections}
      />
      <Container>
        <div className="blog-post">
          <h2>{frontmatter.title}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
