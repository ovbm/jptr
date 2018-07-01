import React from 'react';
import { Link, withPrefix } from 'gatsby-link';
import Flickity from 'flickity';

import 'flickity-bg-lazyload';
import 'lazysizes';


class Music extends React.Component {

  componentDidMount() {
    const flkty = new Flickity('.main-carousel', {
      bgLazyLoad: true,
    });
  }

  render() {
    const songs = [
      {
        "title" : "Revolution",
        "songid":"revolution",
        "date": "24.01.16",
        "manifesto" : "because you still hesitate.",
        "spotifyid" : "",
        "youtubeid": "OL5cHoNn7ak",
        "backgroundimage": ""
      },{
        "title" : "Master Babe",
        "songid":"masterbabe",
        "date": "22.02.16",
        "manifesto" : "because vaginas are a girls best friend.",
        "spotifyid" : "",
        "youtubeid": "xXdrl22h4Yo",
        "backgroundimage": ""
      },{
        "title" : "Attack",
        "songid":"attack",
        "date": "23.03.16",
        "manifesto" : "because you are way too sensitive.",
        "spotifyid" : "",
        "youtubeid": "7m1bQxudLq8",
        "backgroundimage": ""
      },{
        "title" : "Europa",
        "songid":"europa",
        "date": "22.04.16",
        "manifesto" : "because you might be wrong.",
        "spotifyid" : "3Atrack%3A5fHOE3JsO4fqfksb6Iynp1",
        "youtubeid": "QbRyrWupB2Y",
        "backgroundimage": "europabg2-min.jpg"
      },{
        "title" : "Skywalker",
        "songid":"skywalker",
        "date": "21.05.16",
        "manifesto" : "because you have read and agree to the terms and conditions.",
        "spotifyid" : "3Atrack%3A21JTBdQW4s51gOOoGNdzKW",
        "youtubeid": "",
        "backgroundimage": "skywalkerbg.jpg"
      },{
        "title" : "Jesus Christ JPTR",
        "songid":"jcj",
        "date": "20.06.16",
        "manifesto" : "because imagine there's no heaven.",
        "spotifyid" : "3Atrack%3A4SBZ45dB4lwu3ADyGUJgMG",
        "youtubeid": "r7rNVpXsPLA",
        "backgroundimage": "jcjbg.jpg"
      },{
        "title" : "Oblivious",
        "songid":"oblivious",
        "date": "20.07.16",
        "manifesto" : "because you are over.",
        "spotifyid" : "",
        "youtubeid": "I1zNbf2Fpzo",
        "backgroundimage": ""
      },{
        "title" : "Pompadour",
        "songid":"pompadour",
        "date": "18.08.16",
        "manifesto" : "because after us, the deluge.",
        "spotifyid" : "3Atrack%3A5yJXGDnGnR0DI6k9PTUqLx",
        "youtubeid": "",
        "backgroundimage": "pompadour.jpg"
      },{
        "title" : "Motherland",
        "songid":"motherland",
        "date": "16.09.16",
        "manifesto" : "because you were born this way.",
        "spotifyid" : "3Atrack%3A37hGOHqpkmgpCgWcom9f7w",
        "youtubeid": "",
        "backgroundimage": "motherland.jpg"
      },{
        "title" : "Polyamorhythm",
        "songid":"polyamorhythm",
        "date": "15.10.16",
        "manifesto" : "because more is more.",
        "spotifyid" : "3Atrack%3A1NOzBWl7MfgBd5k3CnaDxU",
        "youtubeid": "",
        "backgroundimage": "polyamorhythm.jpg"
      },{
        "title" : "Transformers",
        "songid":"transformers",
        "date": "14.11.16",
        "manifesto" : "because you are all that meets the eye.",
        "spotifyid" : "3Aalbum%3A5bltL1hm3dfGINXa7c1Xz5",
        "youtubeid": "Y18l6ZgFqjE",
        "backgroundimage": ""
      },{
        "title" : "Boyfriend",
        "songid":"boyfriend",
        "date": "14.12.16",
        "manifesto" : "because you are informed, now consent!.",
        "spotifyid" : "3Aalbum%3A0ok0XAnc0ioSohMHORMint",
        "youtubeid": "",
        "backgroundimage": "boyfriendbg.jpg"
      }
    ]
  
    const content = songs.map((song) => {
      if (song.youtubeid !== "") {
        return (
        <div key={song.songid} className="carousel-cell">
          <iframe 
            className="youtube lazyload" 
            width="1280"
            height="720"
            data-src={`https://www.youtube.com/embed/${song.youtubeid}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0" allowFullScreen>
          </iframe>
          <div className="overlay">
            <p>{song.date}, {song.title} <br/> <span style={{fontWeight:'bold'}}>{song.manifesto}</span></p>
          </div>
        </div>
        )
      } else { 
        return (
        <div 
          key={song.songid}
          className="carousel-cell"
          data-flickity-bg-lazyload={withPrefix(`images/${song.songid}_bg.jpg`)}>
          <div id={song.songid} className="fullscreenbg"></div>
          <iframe className="spotifyeb lazyload" data-src={`https://embed.spotify.com/?uri=spotify%${song.spotifyid}`} width="300" height="80" frameBorder="0" allowTransparency="true"></iframe>
          <div className="overlay">
            <p>{song.date}, {song.title} <br/> <span style={{fontWeight:'bold'}}>{song.manifesto}</span></p>
          </div>
        </div>
        )
      }
    });

    return (
      <div className="container">
        <div className="main-carousel">
          {content}
        </div>
      </div>
    )
  }
}

export default Music
