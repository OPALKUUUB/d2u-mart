const axios = require("axios");
const htmlparser2 = require("htmlparser2");
const render = require("dom-serializer").default;
const CSSselect = require("css-select");

exports.getData = async (req, res) => {
  console.log("getting data from yahoo link");
  let linkId = req.query.linkId || "u1054914747";
  let link = `https://page.auctions.yahoo.co.jp/jp/auction/${linkId}`;
  let data = await getYahooData(link);
  res.json(data);
};

async function getYahooData(link) {
  let data = await axios({
    method: "get",
    url: link,
  }).then((response) => {
    const dom = htmlparser2.parseDocument(response.data);
    const title = CSSselect.selectOne("h1.ProductTitle__text", dom).children[0]
      .data;
    const images = CSSselect.selectAll("div.ProductImage__inner img", dom).map(
      (productImage) => {
        return productImage.attribs.src;
      }
    );
    const details = CSSselect.selectAll(
      "dd.ProductDetail__description",
      dom
    ).map((description, index) => {
      return description.children[0].next.data;
    });
    const price_now = CSSselect.selectOne(
      "dd.Price__value",
      dom
    ).children[0].data.trim();
    return {
      title: title,
      images: images,
      details: details,
      price_now: price_now,
    };
  });
  console.log(data);
  return data;
}
