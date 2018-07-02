import React from 'react';
import { Link, withPrefix } from 'gatsby-link';
import fitvids from 'fitvids';


class Press extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      past : [],
      upcoming: [],
      showpast: false
    }
  }

  loadData() {
    fetch("https://api.songkick.com/api/3.0/artists/8774179-jptr/calendar.json?apikey=PuBku2LW56sT7SNA")
      .then(response => response.json())
      .then(data => {
        if (data.resultsPage.results.length>=1) {
          var subdata = data.resultsPage.results.event;
          this.setState({
            upcoming: subdata
          });
        } console.log("nodata");
      });
    fetch("https://api.songkick.com/api/3.0/artists/8774179-jptr/gigography.json?apikey=PuBku2LW56sT7SNA")
      .then(response => response.json())
      .then(data => {
      var subdata = data.resultsPage.results.event;
      this.setState({
        past: subdata.reverse()
      });
    });
  }

  componentDidMount() {
    fitvids('.videowrap');
    this.loadData();

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

    const navToggle = document.getElementById('press-nav-toggle');
    const header = document.getElementById('press-pageheader');
    // const nav = document.getElementsByTagName('nav')[0];
    // const height = '-' + nav.clientHeight + 'px';
    // Add negative margin of nav's height to header

    // Toggles show class which overides the negative margin
    navToggle.onclick = () => {
      toggleClass(header, 'show');
    };
    document.querySelector('#press-nav-toggle')
      .addEventListener('click', function() {
        this.classList.toggle( "active" );
    });
  }

  togglePast = () => {
    const currentState = this.state.showpast;
    this.setState({ showpast: !currentState });
  };

  render(){
    const past =  this.state.past.map((event)=>{
      return(
       <div key={event.id} className='shows'>
         <p>
          {`${event.start.date} / ${event.venue === 'Unknown venue' ? '' : event.venue.displayName} / ${event.location.city} `}
         </p>
       </div>
      )
     })

    return(
      <div>
        <div id="press-pageheader">
          <div id="press-nav">
            <ul id="press-navlist">
              <li><a href="#about">About</a></li>
              <li><a href="#video">Video</a></li>
              <li><a href="#sound">Audio</a></li>
              <li><a href="#gigs">Live</a></li>
            </ul>
          </div>
        </div>
        <a id="press-nav-toggle" href="#">
          <span />
        </a>
        <div className="container">
        <div className="contentwrap">
            <h1 className="jptrtitle">JPTR <br/> the absence of ...</h1>
            <iframe 
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/552555507%3Fsecret_token%3Ds-uRwXt&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" />
            <h2 id="about">ABOUT</h2>
            <p style={{ textAlign: "left" }}> 
              JPTR (pronounced „jupiter“) is a Zurich based Art Pop duo founded in 2016 by
              Andrina Bollinger and Ramón Olvieras.
              They went on to release a new song every full moon in 2016
              and their debut album "JPTR" in spring of 2017. With the new EP 
              "the absence of ..." they return to the band's essence - 
              songs that only feature drums & vocals - reflecting this musical reduction,
              "the absence of ..." deals with transience (principium), fear of
              emptiness (kenophobia) and the feeling of suspence and stagnation (eye).
            </p>

            <p> 
              JPTR have been featured on international blogs,
              such as <a href="https://www.xlr8r.com/news/2016/04/premiere-watch-a-new-video-from-jptr/" target="_blank">XLR8R (US)</a>,
              &nbsp;<a href="http://www.kaltblut-magazine.com/premiere-jptr-master-babe-al-hug-remix/" target="_blank">KALTBLUT (DE)</a>,
              &nbsp;<a href="http://www.the-monitors.com/2016/02/26/premiere-jptr-master-babe/" target="_blank">The Monitors (UK)</a>,
              &nbsp;<a href="http://www.famemagazine.co.uk/2016/04/11/jptr/" target="_blank">FAMEmagazine (UK)</a>,
              &nbsp;<a href="http://www.intro.de/popmusik/musikvideos-der-woche-mit-gold-panda-school-of-seven-bells-neon-indian-u-v-m" target="_blank">Intro Mag (DE)</a>,
              &nbsp;<a href="http://glasswerk.co.uk/magazine/article/21880/Video+premiere:+JPTR+-+Revolution/" target="_blank">Glasswerk (UK)</a>
              &nbsp;and Et Musique Pour Tous (FR) among others.
            </p>
            <p><a href={withPrefix("/jptr_theabsenceof_presskit.zip")}>Presskit_de.zip (10mb)</a></p>
            <h2 id="video">VIDEOS</h2>
              <div>
                <h3>the absence of ... (EP) 2018 <i>UNRELEASED</i></h3>
                <div className="videowrap">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/2a5OHP1vKOg" frameBorder="no" allowFullScreen></iframe>
                </div>
                <h3>JPTR (LP) 2017</h3>
                <div className="videowrap">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/a1zrX1R4u3E" frameBorder="no" allowFullScreen></iframe>
                </div>
                <div className="videowrap">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/xXdrl22h4Yo" frameBorder="no" allowFullScreen></iframe>
                </div>
                <div className="videowrap">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/OL5cHoNn7ak" frameBorder="no" allowFullScreen></iframe>
                </div>
              </div>
            <h2 id="sound">AUDIO</h2>
            <iframe width="100%" height="450" scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/289351657%3Fsecret_token%3Ds-52Www&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"></iframe>

            <h2 id="gigs">LIVE</h2>
            <p>TBA</p>
            <div id="upcoming"></div>
            <div id="past">
              {past}
            </div>

            <h2 id="contact">CONTACT</h2>
            <div className="bookinglabelbox">
              <a href="mailto:everything@jptr.band">everything@jptr.band</a>
            </div>
          </div> 
        </div>
        <div className="bg-img" />
      </div>
    )
  }
}

export default Press
