import React from 'react';

import fitvids from 'fitvids';
import jptrcd from '../images/jptrcdsmall.jpg';

class IndexPage extends React.Component {
  componentDidMount() {
    fitvids('.videowrap');
  }

  render() {
    return (
      <div>
        <div className="container">
          <img 
            src={jptrcd}
            alt="jptr ep, the absence of ..."
            style={{ maxWidth: '80%' }}
          />
          <h1>JPTR, the absence of ...</h1>
          <h2> EP out 13.07.18</h2>
        </div>
        <div className="bg-img" />
      </div>
    );
  }
}

export default IndexPage;
