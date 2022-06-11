import React, { useContext } from "react";
import { MartContext, MartProvider } from "./MartProvider";

export const MartShowTest = () => {
  return (
    <MartProvider>
      <App />
    </MartProvider>
  );
};

function App() {
  const { datas, category } = useContext(MartContext);
  console.log(datas);
  return (
    <section style={{ margin: "100px" }}>
      <h1>{category}</h1>
      {datas.length > 0 &&
        datas.map((item, index) => (
          <ul key={index}>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>
              <img src={item.image} alt={item.ref} width={200} />
            </li>
            <ul>
              <li>{item.actions.price_value}</li>
              <li>{item.actions.price_set_text}</li>
              <li>{item.actions.price_tax_value}</li>
            </ul>
          </ul>
        ))}
    </section>
  );
}
