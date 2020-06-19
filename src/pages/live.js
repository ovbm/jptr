import React from 'react';
import Link from 'gatsby-link';
import Layout from "../components/layout"

class Live extends React.Component {
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
        var subdata = data.resultsPage.results.event;
        this.setState({
          upcoming: subdata
        });
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
    this.loadData();
  }

  togglePast = () => {
    const currentState = this.state.showpast;
    this.setState({ showpast: !currentState });
  }

  render(){
    const past = this.state.past.map((event)=>{
      return(
       <div key={event.id} className='shows'>
         <ul>
           <li>{event.start.date}</li>
           <li>
             <a target='_blank' href={event.uri}>
             {`${event.venue ? event.venue.displayName : ''} ${event.location.city} `}
             </a>
           </li>
         </ul>
       </div>
      )
     })

     const upcoming = this.state.upcoming.map((event)=>{
      return(
       <div key={event.id} className='shows'>
         <ul>
           <li>{event.start.date}</li>
           <li>
             <a target='_blank' href={event.uri}>
             {`${event.venue ? event.venue.displayName : ''} ${event.location.city} `}
             </a>
           </li>
         </ul>
       </div>
      )
     })

    return(
      <Layout location={this.props.location}>
        <div>
          <div className="container">
            <h2>LIVE</h2>
            <div id="upcoming">
              {upcoming}
            </div>
            <h2 id="pasttitle" onClick={this.togglePast}>PAST +</h2>
            <div id="past" className={this.state.showpast ? 'showpast' : ''}>
            {past}
            </div>
          </div>
          <div className="bg-img"></div>
        </div>
      </Layout>
    )
  }
}

export default Live
