import React from 'react';
import Link from 'gatsby-link';

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
        past: subdata
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
    const past =  this.state.past.map((event)=>{
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
      <div>
        <div className="container">
          <h2>LIVE</h2>
          <div id="upcoming">
            TBA
          </div>
          <h2 id="pasttitle" onClick={this.togglePast}>PAST +</h2>
          <div id="past" className={this.state.showpast ? 'showpast' : ''}>
          {past}
          </div>
        </div>
        <div className="bg-img"></div>
      </div>
    )
  }
}

export default Live
