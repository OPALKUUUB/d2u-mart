import React, { useState } from "react";
import Styles from "./Styles";

export const Auction = () => {
  const [link, setLink] = useState("");
  const [data, setData] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    fetch("/api/yahoo/getdata")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  return (
    <Styles>
      <section id="search-yahoo">
        <form onSubmit={handleSearch}>
          <input
            name="link"
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </section>
      {data !== null && (
        <section id="show-search-data">
          <div id="show-image">
            {data.images.map((src) => {
              return <img src={src} alt={src} />;
            })}
          </div>
          <div id="show-content">Content</div>
          <div id="form-bidding">Form Bidding</div>
        </section>
      )}
    </Styles>
  );
};
