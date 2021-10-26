import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Helmet } from 'react-helmet';
import React from 'react';
import '../style/main.scss';
import Footer from './Footer/Footer';

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
      <section id="blog-header" className="hero">
        <div className="blog-post__title">
          <h1>{frontmatter.title}</h1>
          <p>
            {`Posted By `}
            <em>{frontmatter.author}</em>
            {` on ${frontmatter.date}`}
          </p>
        </div>
      </section>
      <section id="blog-content">
        <div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </section>
      <Footer />
    </>
  );
};
