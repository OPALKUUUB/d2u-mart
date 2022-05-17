import "./App.css";
import useToken from "./hook/useToken";
import { AppSystem } from "./system/AppSystem";
import AppWeb from "./website/AppWeb";

function App() {
  const { token } = useToken();
  if (!token) {
    return <AppWeb />;
  }
  return <AppSystem />;
}

export default App;
