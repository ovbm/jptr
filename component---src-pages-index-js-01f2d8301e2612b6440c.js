(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3vdR":function(e,t,r){e.exports=r.p+"static/jptrcdsmall-699acc844cd4b6bab69952ead71579b2.jpg"},RXBc:function(e,t,r){"use strict";r.r(t);var i=r("q1tI"),o=r.n(i),n=r("Bl7J"),a=r("Tp9X"),c=r.n(a);r("3vdR");var p=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var a=i.prototype;return a.componentDidMount=function(){c()(".videowrap")},a.render=function(){return o.a.createElement(n.a,{location:this.props.location},o.a.createElement("div",null,o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"videowrap"},o.a.createElement("iframe",{title:"eyevideo",width:"560",height:"315",src:"https://www.youtube.com/embed/2a5OHP1vKOg",frameBorder:"no",allowFullScreen:!0})),o.a.createElement("h1",null,"JPTR, the absence of ..."),o.a.createElement("iframe",{title:"spotifyembedalbumtheabsenceof",src:"https://open.spotify.com/embed?uri=spotify:album:5X5jTWx53Fx6tFW4akL0s7",width:"300",height:"80",frameBorder:"0",allowTransparency:"true",allow:"encrypted-media"})),o.a.createElement("div",{className:"bg-img"})))},i}(o.a.Component);t.default=p},Tp9X:function(e,t,r){r("q8oJ"),r("C9fy"),r("8npG"),r("sC2a"),r("HQhv"),r("AqHK"),r("OeI1"),r("JHok");var i=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object"];function o(e,t){return"string"==typeof e&&(t=e,e=document),Array.prototype.slice.call(e.querySelectorAll(t))}function n(e){return"string"==typeof e?e.split(",").map(c).filter(a):function(e){return"[object Array]"===Object.prototype.toString.call(e)}(e)?function(e){return[].concat.apply([],e)}(e.map(n).filter(a)):e||[]}function a(e){return e.length>0}function c(e){return e.replace(/^\s+|\s+$/g,"")}e.exports=function(e,t){var r;t=t||{},r=e=e||"body","[object Object]"===Object.prototype.toString.call(r)&&(t=e,e="body"),t.ignore=t.ignore||"",t.players=t.players||"";var c=o(e);if(a(c)){var p;if(!document.getElementById("fit-vids-style"))(document.head||document.getElementsByTagName("head")[0]).appendChild(((p=document.createElement("div")).innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',p.childNodes[1]));var l=n(t.players),d=n(t.ignore),s=d.length>0?d.join():null,u=i.concat(l).join();a(u)&&c.forEach((function(e){o(e,u).forEach((function(e){s&&e.matches(s)||function(e){if(/fluid-width-video-wrapper/.test(e.parentNode.className))return;var t=parseInt(e.getAttribute("width"),10),r=parseInt(e.getAttribute("height"),10),i=isNaN(t)?e.clientWidth:t,o=(isNaN(r)?e.clientHeight:r)/i;e.removeAttribute("width"),e.removeAttribute("height");var n=document.createElement("div");e.parentNode.insertBefore(n,e),n.className="fluid-width-video-wrapper",n.style.paddingTop=100*o+"%",n.appendChild(e)}(e)}))}))}}}}]);
//# sourceMappingURL=component---src-pages-index-js-01f2d8301e2612b6440c.js.map