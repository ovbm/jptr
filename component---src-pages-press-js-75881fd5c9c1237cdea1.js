(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"8b04":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),o=a("Wbzz"),l=a("Tp9X"),i=a.n(l),s=a("Bl7J");var c=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).togglePast=function(){var e=a.state.showpast;a.setState({showpast:!e})},a.state={past:[],upcoming:[],showpast:!1},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=r.prototype;return l.loadData=function(){var e=this;fetch("https://api.songkick.com/api/3.0/artists/8774179-jptr/calendar.json?apikey=PuBku2LW56sT7SNA").then((function(e){return e.json()})).then((function(t){if(t.resultsPage.results.length>=1){var a=t.resultsPage.results.event;e.setState({upcoming:a})}console.log("nodata")})),fetch("https://api.songkick.com/api/3.0/artists/8774179-jptr/gigography.json?apikey=PuBku2LW56sT7SNA").then((function(e){return e.json()})).then((function(t){var a=t.resultsPage.results.event;e.setState({past:a.reverse()})}))},l.componentDidMount=function(){i()(".videowrap"),this.loadData();var e=document.getElementById("press-nav-toggle"),t=document.getElementById("press-pageheader");e.onclick=function(){!function(e,t){if(e&&t){var a=e.className,r=a.indexOf(t);-1===r?a+=" "+t:a=a.substr(0,r)+a.substr(r+t.length),e.className=a}}(t,"show")},document.querySelector("#press-nav-toggle").addEventListener("click",(function(){this.classList.toggle("active")}))},l.render=function(){var e=this.state.past.map((function(e){return n.a.createElement("div",{key:e.id,className:"shows"},n.a.createElement("p",null,e.start.date+" / "+("Unknown venue"===e.venue?"":e.venue.displayName)+" / "+e.location.city+" "))}));return n.a.createElement(s.a,{location:this.props.location},n.a.createElement("div",null,n.a.createElement("div",{id:"press-pageheader"},n.a.createElement("div",{id:"press-nav"},n.a.createElement("ul",{id:"press-navlist"},n.a.createElement("li",null,n.a.createElement("a",{href:"#about"},"About")),n.a.createElement("li",null,n.a.createElement("a",{href:"#video"},"Video")),n.a.createElement("li",null,n.a.createElement("a",{href:"#sound"},"Audio")),n.a.createElement("li",null,n.a.createElement("a",{href:"#gigs"},"Live"))))),n.a.createElement("a",{id:"press-nav-toggle",href:"#"},n.a.createElement("span",null)),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"contentwrap"},n.a.createElement("h1",{className:"jptrtitle"},"JPTR ",n.a.createElement("br",null)," the absence of ..."),n.a.createElement("iframe",{width:"100%",height:"450",scrolling:"no",frameBorder:"no",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/552555507%3Fsecret_token%3Ds-uRwXt&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}),n.a.createElement("h2",{id:"about"},"ABOUT"),n.a.createElement("p",{style:{textAlign:"left"}},'JPTR (pronounced „jupiter“) is a Zurich based Art Pop duo founded in 2016 by Andrina Bollinger and Ramón Oliveras. They went on to release a new song every full moon in 2016 and their debut album "JPTR" in spring of 2017. With the new EP "the absence of ..." they return to the band\'s essence - songs that only feature drums & vocals - reflecting this musical reduction, "the absence of ..." deals with transience (principium), fear of emptiness (kenophobia) and the feeling of suspense and stagnation (eye).'),n.a.createElement("p",null,"JPTR have been featured on international blogs, such as ",n.a.createElement("a",{href:"https://www.xlr8r.com/news/2016/04/premiere-watch-a-new-video-from-jptr/",target:"_blank"},"XLR8R (US)"),",  ",n.a.createElement("a",{href:"http://www.kaltblut-magazine.com/premiere-jptr-master-babe-al-hug-remix/",target:"_blank"},"KALTBLUT (DE)"),",  ",n.a.createElement("a",{href:"http://www.the-monitors.com/2016/02/26/premiere-jptr-master-babe/",target:"_blank"},"The Monitors (UK)"),",  ",n.a.createElement("a",{href:"http://www.famemagazine.co.uk/2016/04/11/jptr/",target:"_blank"},"FAMEmagazine (UK)"),",  ",n.a.createElement("a",{href:"http://www.intro.de/popmusik/musikvideos-der-woche-mit-gold-panda-school-of-seven-bells-neon-indian-u-v-m",target:"_blank"},"Intro Mag (DE)"),",  ",n.a.createElement("a",{href:"http://glasswerk.co.uk/magazine/article/21880/Video+premiere:+JPTR+-+Revolution/",target:"_blank"},"Glasswerk (UK)")," and Et Musique Pour Tous (FR) among others."),n.a.createElement("p",null,n.a.createElement("a",{href:Object(o.b)("/jptr_theabsenceof_presskit.zip")},"Presskit_de.zip (10mb)")),n.a.createElement("p",{style:{fontSize:"0.75em"}},"Music composed by Andrina Bollinger and Ramón Oliveras ",n.a.createElement("br",null),"Lyrics by Andrina Bollinger and Olivier Baumann ",n.a.createElement("br",null),"Recorded at Bakermoon Studios Berlin by Yannik Sandhofer ",n.a.createElement("br",null),"Mixed and Mastered by Martin Ruch (Control Room Berlin), expept Kenophobia II by Yannik Sandhofer",n.a.createElement("br",null),"Artwork and Video by Olivier Baumann (IOVI)",n.a.createElement("br",null)),n.a.createElement("h2",{id:"video"},"VIDEOS"),n.a.createElement("div",null,n.a.createElement("h3",null,"the absence of ... (EP) 2018 ",n.a.createElement("i",null,"UNRELEASED")),n.a.createElement("div",{className:"videowrap"},n.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/2a5OHP1vKOg",frameBorder:"no",allowFullScreen:!0})),n.a.createElement("div",{className:"videowrap"},n.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/WFdoYD0hY0Y",frameBorder:"no",allowFullScreen:!0})),n.a.createElement("h3",null,"JPTR (LP) 2017"),n.a.createElement("div",{className:"videowrap"},n.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/a1zrX1R4u3E",frameBorder:"no",allowFullScreen:!0})),n.a.createElement("div",{className:"videowrap"},n.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/xXdrl22h4Yo",frameBorder:"no",allowFullScreen:!0})),n.a.createElement("div",{className:"videowrap"},n.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/OL5cHoNn7ak",frameBorder:"no",allowFullScreen:!0}))),n.a.createElement("h2",{id:"sound"},"AUDIO"),n.a.createElement("iframe",{width:"100%",height:"450",scrolling:"no",frameBorder:"no",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/289351657%3Fsecret_token%3Ds-52Www&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&visual=true"}),n.a.createElement("h2",{id:"gigs"},"LIVE"),n.a.createElement("p",null,"TBA"),n.a.createElement("div",{id:"upcoming"}),n.a.createElement("div",{id:"past"},e),n.a.createElement("h2",{id:"contact"},"CONTACT"),n.a.createElement("div",{className:"bookinglabelbox"},n.a.createElement("a",{href:"mailto:everything@jptr.band"},"everything@jptr.band")))),n.a.createElement("div",{className:"bg-img"})))},r}(n.a.Component);t.default=c},Tp9X:function(e,t,a){a("q8oJ"),a("C9fy"),a("8npG"),a("sC2a"),a("HQhv"),a("AqHK"),a("OeI1"),a("JHok");var r=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object"];function n(e,t){return"string"==typeof e&&(t=e,e=document),Array.prototype.slice.call(e.querySelectorAll(t))}function o(e){return"string"==typeof e?e.split(",").map(i).filter(l):function(e){return"[object Array]"===Object.prototype.toString.call(e)}(e)?function(e){return[].concat.apply([],e)}(e.map(o).filter(l)):e||[]}function l(e){return e.length>0}function i(e){return e.replace(/^\s+|\s+$/g,"")}e.exports=function(e,t){var a;t=t||{},a=e=e||"body","[object Object]"===Object.prototype.toString.call(a)&&(t=e,e="body"),t.ignore=t.ignore||"",t.players=t.players||"";var i=n(e);if(l(i)){var s;if(!document.getElementById("fit-vids-style"))(document.head||document.getElementsByTagName("head")[0]).appendChild(((s=document.createElement("div")).innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',s.childNodes[1]));var c=o(t.players),m=o(t.ignore),d=m.length>0?m.join():null,u=r.concat(c).join();l(u)&&i.forEach((function(e){n(e,u).forEach((function(e){d&&e.matches(d)||function(e){if(/fluid-width-video-wrapper/.test(e.parentNode.className))return;var t=parseInt(e.getAttribute("width"),10),a=parseInt(e.getAttribute("height"),10),r=isNaN(t)?e.clientWidth:t,n=(isNaN(a)?e.clientHeight:a)/r;e.removeAttribute("width"),e.removeAttribute("height");var o=document.createElement("div");e.parentNode.insertBefore(o,e),o.className="fluid-width-video-wrapper",o.style.paddingTop=100*n+"%",o.appendChild(e)}(e)}))}))}}}}]);
//# sourceMappingURL=component---src-pages-press-js-75881fd5c9c1237cdea1.js.map