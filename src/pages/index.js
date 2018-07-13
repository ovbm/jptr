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
          <div className="videowrap">
            <iframe
              title="eyevideo"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/2a5OHP1vKOg"
              frameBorder="no"
              allowFullScreen
            />
          </div>
          <h1>JPTR, the absence of ...</h1>
          <iframe
            title="spotifyembedalbumtheabsenceof"
            src="https://open.spotify.com/embed?uri=spotify:album:5X5jTWx53Fx6tFW4akL0s7"
            width="300"
            height="80"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
          />
        </div>
        <div className="bg-img" />
      </div>
    );
  }
}

export default IndexPage;
