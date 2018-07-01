import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby-link';

import Header from '../components/header.js';

import '../../sass/main.scss';

const Layout = ({ children, data, ...props }) => (
  <div>
    <Helmet
      bodyAttributes={{
        id: props.location.pathname === "/jptr/" ? "home" : props.location.pathname.replace("/jptr/","").slice(0, -1),
      }}
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'JPTR: the absence of ...' },
        { name: 'keywords', content: 'JPTR, band, the absence of, eye, kenophobia, principium, avant pop, avant-garde, art pop, duo, europa, attack, revolution, master babe, skywalker' },
        { name: 'viewport', content: 'width=device-width' },
        { name: 'google-site-verification', content: 'avd1VUfdt9c2n811eyOhgMg6bd8-2H6wi2kmTjfIutY' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/x-icon', href: '../images/favicon.ico' },
      ]}
      script={[
        { 
          type: 'text/javascript', 
          innerHTML: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
          
            ga('create', 'UA-43480308-11', 'auto');
            ga('require', 'eventTracker');
            ga('require', 'outboundLinkTracker', {
              linkSelector: '.js-track-clicks'
            });
            ga('send', 'pageview');`,
        }, {
          type: 'text/javascript',
          innerHTML: `(function(d) {
            var config = {
              kitId: 'xoh2pab',
              scriptTimeout: 3000,
              async: true
            },
            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
          })(document);`
        }

      ]}
    />
      {/* <div id="loading"></div> */}
      <Header/>
      {children()}
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
