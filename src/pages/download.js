import React from 'react'
import Layout from '../components/layout'

class DownloadPage extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div>
          <div className="container">
            <h2>Enter download code</h2>
            <iframe
              id="iframe"
              width="100%"
              height="5%"
              frameborder="0"
              name="iframe"
              scrolling="auto"
              allowTransparency="true"
              src="http://www.protectdisc.com/App/CodeLoad/Download.aspx"
            >
              This option will not work correctly. Unfortunately, your browser
              does not support Inline Frames
            </iframe>=
          </div>
          <div className="bg-img" />
        </div>
      </Layout>
    )
  }
}

export default DownloadPage
