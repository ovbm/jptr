webpackJsonp([55828127892833],{208:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}e.__esModule=!0;var l=n(2),u=a(l),i=n(48),c=(a(i),function(t){function e(n){o(this,e);var a=s(this,t.call(this,n));return a.togglePast=function(){var t=a.state.showpast;a.setState({showpast:!t})},a.state={past:[],upcoming:[],showpast:!1},a}return r(e,t),e.prototype.loadData=function(){var t=this;fetch("https://api.songkick.com/api/3.0/artists/8774179-jptr/calendar.json?apikey=PuBku2LW56sT7SNA").then(function(t){return t.json()}).then(function(e){if(e.resultsPage.results.length>=1){var n=e.resultsPage.results.event;t.setState({upcoming:n})}console.log("nodata")}),fetch("https://api.songkick.com/api/3.0/artists/8774179-jptr/gigography.json?apikey=PuBku2LW56sT7SNA").then(function(t){return t.json()}).then(function(e){var n=e.resultsPage.results.event;t.setState({past:n})})},e.prototype.componentDidMount=function(){this.loadData()},e.prototype.render=function(){var t=this.state.past.map(function(t){return u.default.createElement("div",{key:t.id,className:"shows"},u.default.createElement("ul",null,u.default.createElement("li",null,t.start.date),u.default.createElement("li",null,u.default.createElement("a",{target:"_blank",href:t.uri},(t.venue?t.venue.displayName:"")+" "+t.location.city+" "))))});return u.default.createElement("div",null,u.default.createElement("div",{className:"container"},u.default.createElement("h2",null,"LIVE"),u.default.createElement("div",{id:"upcoming"},"TBA"),u.default.createElement("h2",{id:"pasttitle",onClick:this.togglePast},"PAST +"),u.default.createElement("div",{id:"past",className:this.state.showpast?"showpast":""},t)),u.default.createElement("div",{className:"bg-img"}))},e}(u.default.Component));e.default=c,t.exports=e.default}});
//# sourceMappingURL=component---src-pages-live-js-2460324f9c3db4b78205.js.map