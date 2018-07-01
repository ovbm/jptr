import React from 'react';

class Shop extends React.Component {
  componentDidMount() {
    (function () {
      let scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          ShopifyBuyInit();
        } else {
          loadScript();
        }
      } else {
        loadScript();
      }

      function loadScript() {
        let script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
      }

      function ShopifyBuyInit() {
        let client = ShopifyBuy.buildClient({
          domain: 'jptrshop.myshopify.com',
          apiKey: '1c8b069e977e35183c3bfc65312502f4',
          appId: '6',
        });

        ShopifyBuy.UI.onReady(client).then((ui) => {
          ui.createComponent('collection', {
            id: 409240071,
            node: document.getElementById('collection-component-29b5e973bb4'),
            moneyFormat: 'SFr.%20%7B%7Bamount%7D%7D',
            options: {
      "product": {
        "buttonDestination": "modal",
        "variantId": "all",
        "contents": {
          "imgWithCarousel": false,
          "variantTitle": false,
          "options": false,
          "description": false,
          "buttonWithQuantity": false,
          "quantity": false
        },
        "text": {
          "button": "VIEW PRODUCT"
        },
        "styles": {
          "product": {
            "text-align": "right",
            "margin-bottom": "50px",
            "@media (min-width: 601px)": {
              "max-width": "calc(33.33333% - 30px)",
              "margin-left": "30px"
            }
          },
          "button": {
            "background-color": "#000000",
            ":hover": {
              "background-color": "#000000"
            },
            ":focus": {
              "background-color": "#000000"
            }
          }
        }
      },
      "collection" : {
        "styles": {
          "buy-frame" : {
            "text-align" : "right"
          }
        }
      },
      "cart": {
        "contents": {
          "button": true
        },
        "styles": {
          "button": {
            "background-color": "#000000",
            ":hover": {
              "background-color": "#000000"
            },
            ":focus": {
              "background-color": "#000000"
            }
          },
          "footer": {
            "background-color": "#ffffff"
          }
        }
      },
      "modalProduct": {
        "contents": {
          "img": false,
          "imgWithCarousel": true,
          "variantTitle": false,
          "buttonWithQuantity": true,
          "button": false,
          "quantity": false
        },
        "styles": {
          "product": {
            "@media (min-width: 601px)": {
              "max-width": "100%",
              "margin-left": "0px",
              "margin-bottom": "0px"
            }
          },
          "button": {
            "background-color": "#000000",
            ":hover": {
              "background-color": "#000000"
            },
            ":focus": {
              "background-color": "#000000"
            }
          }
        }
      },
      "toggle": {
        "styles": {
          "toggle": {
            "background-color": "#000000",
            ":hover": {
              "background-color": "#000000"
            },
            ":focus": {
              "background-color": "#000000"
            }
          }
        }
      },
      "productSet": {
        "styles": {
          "products": {
            "@media (min-width: 601px)": {
              "margin-left": "-30px"
            }
          }
        }
      }
    }
          });
        });
      }
    }());
  }

  render() {
    return (
      <div>
        <div className="container">
          <div id="collection-component-29b5e973bb4" />
        </div>
          <div className="bg-img"></div>
      </div>

    );
  }
}

export default Shop;
