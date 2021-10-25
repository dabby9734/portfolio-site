import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Helmet } from 'react-helmet';
import React from 'react';
import '../style/main.scss';

export const query = graphql`
  query PostsByID($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        description
        author
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;

export default ({ data }) => {
  const { frontmatter, body } = data.mdx;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{frontmatter.title}</title>
        <html lang="en" />
        <meta name="description" content={frontmatter.description} />
      </Helmet>
      <section id="blog">
        <div className="blog-post-wrapper">
          <div className="blog-post-wrapper__title">
            <h1>{frontmatter.title}</h1>
            <p>
              {`Posted By `}
              <em>{frontmatter.author}</em>
              {` on ${frontmatter.date}`}
            </p>
          </div>
          <div className="blog-post-wrapper__content">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
      </section>
    </>
  );
};
