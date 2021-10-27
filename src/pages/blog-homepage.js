import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Fade from 'react-reveal/Fade';
import Title from '../components/Title/Title';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Footer from '../components/Footer/Footer';
import { headData } from '../mock/data';
import '../style/main.scss';

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
          author
          description
        }
        slug
      }
    }
  }
`;

const HomePage = ({ data }) => {
  const { lang } = headData;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  if (data.allMdx.nodes.length === 0) {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>No blog posts</title>
          <html lang={lang || 'en'} />
          <meta name="description" content="no blog posts" />
        </Helmet>
        <section id="hero" className="jumbotron">
          <Container>
            <Fade bottom duration={1000} delay={500} distance="30px">
              <h1 className="hero-title text-center">
                Sorry, there are no blog posts
                <span role="img" aria-label="emoji">
                  😞
                </span>
              </h1>
            </Fade>
            <Fade bottom duration={1000} delay={1000} distance="30px">
              <p className="hero-cta justify-content-center">
                <Link className="cta-btn cta-btn--hero" to="/">
                  Go back
                </Link>
              </p>
            </Fade>
          </Container>
        </section>
      </>
    );
  }
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog Homepage</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Navigation page for blog posts" />
      </Helmet>
      <NavigationBar />
      <section id="blog-body">
        <Container>
          <div className="blog-nav-wrapper">
            <Title title="dabby's blog" />
            {data.allMdx.nodes.map(({ excerpt, frontmatter, slug }) => (
              <div>
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="blog-nav-wrapper__text">
                    <div>
                      <Link to={`/posts/${slug}`} target="_blank">
                        <h1 className="blog-nav-wrapper__text-title">{frontmatter.title}</h1>
                      </Link>
                      <p className="blog-nav-wrapper__text-description">
                        {frontmatter.description}
                      </p>
                    </div>
                    <div>
                      <p className="blog-nav-wrapper__text-date">
                        {`${frontmatter.date.split('T')[0].split('-').reverse().join('-')}, by `}
                        <em>{frontmatter.author}</em>
                      </p>
                      <p className="blog-nav-wrapper__text-excerpt">
                        {excerpt || 'Failed to load post excerpt'}
                      </p>
                    </div>
                  </div>
                </Fade>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <div />
      <Footer />
    </>
  );
};

export default HomePage;
