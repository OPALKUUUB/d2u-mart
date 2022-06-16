import React, { createContext, useEffect, useState } from "react";
import styled from "styled-components";

export const MartContext = createContext();
export const MartProvider = ({ children }) => {
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(1);
  const [catId, setCatId] = useState(1148);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const FetchDaiso = async (cat_id = 1148, p = 1) => {
    setLoading(true);
    await fetch(`/daiso/category/${cat_id}?page=${p}`, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setDatas(data.data);
        setCategory(data.category);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    FetchDaiso(catId, page);
  }, []);
  return (
    <MartContext.Provider
      value={{
        datas: datas,
        category: category,
        setCatId: setCatId,
        setPage: setPage,
      }}
    >
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
