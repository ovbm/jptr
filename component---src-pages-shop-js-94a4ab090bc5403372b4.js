webpackJsonp([0xe691da7b53f3],{211:function(t,o,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function c(t,o){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!o||"object"!=typeof o&&"function"!=typeof o?t:o}function i(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function, not "+typeof o);t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o&&(Object.setPrototypeOf?Object.setPrototypeOf(t,o):t.__proto__=o)}o.__esModule=!0;var a=e(2),u=n(a),l=function(t){function o(){return r(this,o),c(this,t.apply(this,arguments))}return i(o,t),o.prototype.componentDidMount=function(){!function(){function t(){var t=document.createElement("script");t.async=!0,t.src=e,(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(t),t.onload=o}function o(){var t=ShopifyBuy.buildClient({domain:"jptrshop.myshopify.com",apiKey:"1c8b069e977e35183c3bfc65312502f4",appId:"6"});ShopifyBuy.UI.onReady(t).then(function(t){t.createComponent("collection",{id:409240071,node:document.getElementById("collection-component-29b5e973bb4"),moneyFormat:"SFr.%20%7B%7Bamount%7D%7D",options:{product:{buttonDestination:"modal",variantId:"all",contents:{imgWithCarousel:!1,variantTitle:!1,options:!1,description:!1,buttonWithQuantity:!1,quantity:!1},text:{button:"VIEW PRODUCT"},styles:{product:{"text-align":"right","margin-bottom":"50px","@media (min-width: 601px)":{"max-width":"calc(33.33333% - 30px)","margin-left":"30px"}},button:{"background-color":"#000000",":hover":{"background-color":"#000000"},":focus":{"background-color":"#000000"}}}},collection:{styles:{"buy-frame":{"text-align":"right"}}},cart:{contents:{button:!0},styles:{button:{"background-color":"#000000",":hover":{"background-color":"#000000"},":focus":{"background-color":"#000000"}},footer:{"background-color":"#ffffff"}}},modalProduct:{contents:{img:!1,imgWithCarousel:!0,variantTitle:!1,buttonWithQuantity:!0,button:!1,quantity:!1},styles:{product:{"@media (min-width: 601px)":{"max-width":"100%","margin-left":"0px","margin-bottom":"0px"}},button:{"background-color":"#000000",":hover":{"background-color":"#000000"},":focus":{"background-color":"#000000"}}}},toggle:{styles:{toggle:{"background-color":"#000000",":hover":{"background-color":"#000000"},":focus":{"background-color":"#000000"}}}},productSet:{styles:{products:{"@media (min-width: 601px)":{"margin-left":"-30px"}}}}}})})}var e="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";window.ShopifyBuy&&window.ShopifyBuy.UI?o():t()}()},o.prototype.render=function(){return u.default.createElement("div",null,u.default.createElement("div",{className:"container"},u.default.createElement("div",{id:"collection-component-29b5e973bb4"})),u.default.createElement("div",{className:"bg-img"}))},o}(u.default.Component);o.default=l,t.exports=o.default}});
//# sourceMappingURL=component---src-pages-shop-js-94a4ab090bc5403372b4.js.map