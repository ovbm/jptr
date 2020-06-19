/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';
import Layout from "../components/layout"

const Shop = (props) => (
  <Layout location={props.location}>
    <StaticQuery
      query={graphql`
          query {
            vinyl: file(relativePath: { eq: "jptr-vinyl.jpg" }) {
              childImageSharp {
                fixed(width: 300, height: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            tshirt: file(relativePath: { eq: "jptr-tshirt.jpg" }) {
              childImageSharp {
                fixed(width: 300, height: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        ` 
      }
    render={data => (
  <div>
      <div className="container">
        <div 
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: '2em',
          }}
        >
          <iframe style={{ margin: '1em', border: 0, width: '300px', height: '300px' }} src="https://bandcamp.com/EmbeddedPlayer/album=3423879961/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless>
            <a href="http://jptr.bandcamp.com/album/jptr">
              JPTR by JPTR
            </a>
          </iframe>
          <iframe style={{ margin: '1em', border: 0, width: '300px', height: '300px' }} src="https://bandcamp.com/EmbeddedPlayer/album=1071300996/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless>
            <a href="http://jptr.bandcamp.com/album/the-absence-of">
              the absence of ... by JPTR
            </a>
          </iframe>
          <a href="https://jptr.bandcamp.com/album/jptr" style={{ margin: '1em', border: 0, width: '300px', height: '300px' }}>
            <Img fixed={data.vinyl.childImageSharp.fixed} />
          </a>
          <a href="https://jptr.bandcamp.com/merch/jptr-mens-classic-t-shirt" style={{ margin: '1em', border: 0, width: '300px', height: '300px' }}>
            <Img fixed={data.tshirt.childImageSharp.fixed}  />
          </a>
        </div>
      </div>
      <div className="bg-img" />
    </div>
    )}
    />
  </Layout>
);

export default Shop;