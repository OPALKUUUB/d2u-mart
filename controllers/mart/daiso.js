const axios = require("axios");
const htmlparser2 = require("htmlparser2");
const render = require("dom-serializer").default;
const CSSselect = require("css-select");

// param catId default cat_id = 1148, ?page=0-...
exports.getDaiso = async (req, res, next) => {
  let datas = [];
  let cat_id = 1148 || req.params.catId;
  let p = 1 || req.query.page;
  console.log("Crawling CatId: " + cat_id);
  console.log("Crawling Page " + p + "...");
  let link = `https://www.daisonet.com/category/${cat_id}?p=${p}&stk=true`;
  let data = await getDaisoData(link);
  console.log("Finish Page catId: " + cat_id);
  res.status(200).json({
    category: data.category,
    length: data.data.length,
    page: p,
    crawling_date: new Date().toLocaleString("th"),
    data: data.data,
  });
};

async function getDaisoData(link) {
  let data = await axios({
    method: "get",
    url: link,
  }).then((response) => {
    const dom = htmlparser2.parseDocument(response.data);
    const category = CSSselect.selectOne(
      "div.category-page-title div.content-title-list",
      dom
    ).children[0].data;
    let data = CSSselect.selectAll(".layout div.productCard.-result", dom).map(
      (productCard) => {
        let id = CSSselect.selectOne(
          "a.productCard-link[href*='/product/']",
          productCard
        ).attribs.href.split("/product/")[1];
        let image = CSSselect.selectOne(
          "div.productCard-image",
          productCard
        ).attribs.style.split(/[()]/)[1];
        let name = CSSselect.selectOne("div.productCard-name", productCard)
          .children[0].data;
        let priceSetText = CSSselect.selectOne(
          "div.productCard-price .productCard-price-setText",
          productCard
        ).children[0].data;
        let priceValue = CSSselect.selectOne(
          "div.productCard-price .productCard-price-value",
          productCard
        ).children[0].data;
        let pricetaxValue = CSSselect.selectOne(
          "div.productCard-price .productCard-pricetax-value",
          productCard
        ).children[0].data;
        let obj = {
          id: id,
          image: image,
          name: name,
          actions: {
            price_set_text: priceSetText,
            price_value: priceValue,
            price_tax_value: pricetaxValue,
          },
          ref: "https://www.daisonet.com/",
        };
        return obj;
      }
    );
    return { category: category, data: data };
  });
  return data;
}

// fixed by use stk=true
//   .filter((productCard) => {
//     let soldout = CSSselect.selectOne(
//       "div.productCard-right .productCard-warehouse.hidden-sp",
//       productCard
//     );
//     if (soldout !== null) {
//       return true;
//     }
//     return false;
//   })
