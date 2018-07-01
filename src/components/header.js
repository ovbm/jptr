import React from 'react';
import Link from 'gatsby-link';

class Header extends React.Component {

  componentDidMount() {
    function toggleClass(element, className) {
      if (!element || !className) {
        return;
      }
      let classString = element.className; 
      const nameIndex = classString.indexOf(className);
      if (nameIndex === -1) {
        classString += ` ${className}`;
      } else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex + className.length);
      }
      element.className = classString;
    }

    const navToggle = document.getElementById('nav-toggle');
    const header = document.getElementById('pageheader');
    // const nav = document.getElementsByTagName('nav')[0];
    // const height = '-' + nav.clientHeight + 'px';
    // Add negative margin of nav's height to header

    // Toggles show class which overides the negative margin
    navToggle.onclick = () => {
      toggleClass(header, 'show');
    };
    document.querySelector('#nav-toggle')
      .addEventListener('click', function() {
        this.classList.toggle( "active" );
    });

    const slinktoggle = document.getElementById('slinktoggle');
    const sllinks = document.getElementById('sllinks');

    slinktoggle.onclick = function() {
      toggleClass(sllinks, 'showbottom');
    };
  }
  
  render() {
    return (
      <div>
        <div id="pageheader">
          <nav id="mainnav">
            <ul id="navlist">
              <li>
                <Link to="/">
                  HOME
                </Link>
              </li>
              <li>
                <Link to="/music/">
                  MUSIC
                </Link>
              </li>
              <li>
                <Link to="/live/">
                  LIVE
                </Link>
              </li>
              <li>
                <Link to="/shop/">
                  SHOP
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <a id="nav-toggle" href="#">
          <span />
        </a>
        <iframe
          title="spotifylike"
          id="spotlike"
          src="https://embed.spotify.com/follow/1/?uri=spotify:artist:0C2oLLhacDu75WDamvONh5&size=basic&theme=light&show-count=0"
          width="200"
          height="25"
          scrolling="no"
          frameBorder="0"
          style={{ border: 'none', overflow: 'hidden' }}
          allowTransparency="true"
        />

        <div id="sllinks">
          <div className="slcontainer">
            <a target="_blank" className="slink slfbook js-track-clicks" data-ategory='link' data-action='facebook' href="https://www.facebook.com/jptriseverything/" />
          </div>
          <div className="slcontainer">
            <a target="_blank" className="slink slinstagram js-track-clicks" data-category='link' data-action='instagram' href="https://www.instagram.com/jptriseverything/" />
          </div>
          <div className="slcontainer">
            <a target="_blank" className="slink slspotify js-track-clicks" data-category='link' data-action='spotify' href="https://open.spotify.com/artist/0C2oLLhacDu75WDamvONh5" />
          </div>
          <div className="slcontainer">
            <a target="_blank" className="slink slyoutube js-track-clicks" data-category='link' data-action='youtube' href="https://www.youtube.com/channel/UCssJS-JzBq_EjCklURDaAKQ" />
          </div>
        </div>
        <div id="slinktoggle">
          <svg height="64" width="64">
            <circle cx="32" cy="36" r="16" fill="white" />
          </svg>
        </div>
      </div>
    );
  }
}

export default Header;
