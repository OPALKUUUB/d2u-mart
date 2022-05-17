import React from "react";
import useToken from "../hook/useToken";

export const AppSystem = () => {
  const { token, setToken, logout } = useToken();
  return (
    <div>
      AppSystem<button onClick={logout}>logout</button>
    </div>
  );
};
