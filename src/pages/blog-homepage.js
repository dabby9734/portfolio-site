import * as React from 'react';
import { graphql, Link } from 'gatsby';

export const query = graphql`
  query SITE_INDEX_QUERY {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
        slug
      }
    }
  }
`;

const HomePage = ({ data }) => {
  return (
    <div>
      <div>
        <h1>dabby&apos;s blog</h1>
        <p>random stuff here</p>
      </div>

      <div>
        {data.allMdx.nodes.map(({ excerpt, frontmatter, slug }) => (
          <div>
            <Link to={`/posts/${slug}`} />
            <p>{frontmatter.date.split(`T`)[0]}</p>
            <p>{excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
