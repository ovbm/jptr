import React from 'react';
import Layout from "../components/layout"

import fitvids from 'fitvids';
import jptrcd from '../images/jptrcdsmall.jpg';

class IndexPage extends React.Component {
  componentDidMount() {
    fitvids('.videowrap');
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <div>
          <div className="container">
            <div className="videowrap">
              <iframe
                title="eyevideo"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/r4G6QjRYBv4"
                frameBorder="no"
                allowFullScreen
              />
            </div>
            <h1>JPTR, Not The Same</h1>
            <iframe 
              style={{border: 0, maxWidth: 400, width: '100%', height: 120}}
              frameBorder="no"
              src="https://bandcamp.com/EmbeddedPlayer/album=944544190/size=large/bgcol=333333/linkcol=2ebd35/tracklist=false/artwork=small/transparent=true/" 
              seamless>
                <a href="https://roninrhythmrecords.bandcamp.com/album/not-the-same">
                  Not The Same by JPTR
                </a>
              </iframe>
          </div>
          <div className="bg-img" />
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
