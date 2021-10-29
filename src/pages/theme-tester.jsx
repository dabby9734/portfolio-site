import React from 'react';
import { Helmet } from 'react-helmet';
import '../style/main.scss';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Footer from '../components/Footer/Footer';

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Page theme tester</title>
        <html lang="en" />
        <meta name="description" content="I test page theme here" />
      </Helmet>
      <NavigationBar />
      <div className="page-theme-tester">
        <h1>Heading 1</h1>
        <hr />
        <h2>Heading 2</h2>
        <hr />
        <h3>Heading 3</h3>
        <hr />
        <h4>Heading 4</h4>
        <hr />
        <h5>Heading 5</h5>
        <hr />
        <h6>Heading 6</h6>
        <hr />
        <a href="/theme-tester">link</a>
        <hr />
        <a href="/theme-tester" className="hover-link">
          link underlined when hover even if it is multiline actually this is quite epic I love this
          animation a lot hahaha hope this will be useful
        </a>
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet, sapien luctus
          interdum pellentesque, nisl nulla luctus elit, eget aliquet risus ex ut turpis. Cras non
          mi in ipsum varius consectetur. Morbi non pellentesque eros.{' '}
          <span className="fancy-text">This text is being made fancy</span> tempus ultrices turpis,
          sit amet fringilla diam semper at. Nunc non accumsan diam. Proin porta lectus nec nibh
          lobortis, nec venenatis lorem iaculis. Mauris tincidunt sit amet enim eu maximus.
          Curabitur sollicitudin turpis augue, id volutpat metus tempor aliquet. Vestibulum libero
          nisl, maximus dictum ante nec, euismod pellentesque lacus. Ut orci mi, suscipit vel
          posuere eget, egestas vel urna. Sed commodo dapibus est eget dictum. Mauris mattis
          scelerisque porttitor. Maecenas augue orci, mattis vel pretium at, malesuada quis enim.
        </p>
        <hr />
        <em>Emphasis text</em>
        <hr />
        <strong>Strong text</strong>
        <hr />
        <code>Code *Syntax Error here!*</code>
        <hr />
        <blockquote>Blockquote</blockquote>
        <hr />
        <div className="card">
          <div className="card-item">
            <h3 className="card-item__text">Progress bar</h3>
            <div className="progress">
              <div className="progress-bar" style={{ width: '80%' }} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
