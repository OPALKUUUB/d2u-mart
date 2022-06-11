import React, { createContext, useEffect, useState } from "react";
import styled from "styled-components";

export const MartContext = createContext();
export const MartProvider = ({ children }) => {
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const FetchDaiso = async (catId = 1148, p = 1) => {
    setLoading(true);
    await fetch(`/daiso/category/${catId}?page=${p}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setDatas(data.data);
        setCategory(data.category);
        console.log(data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    FetchDaiso(1148, page);
  }, []);
  return (
    <MartContext.Provider value={{ datas: datas, category: category }}>
      {children}
      {loading && (
        <Styles>
          <h1>Loading...</h1>
        </Styles>
      )}
    </MartContext.Provider>
  );
};

const Styles = styled.div`
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
