import { Route, Routes } from "react-router-dom";
import Actor from "./components/Actor/Actor";
import HeaderMain from "./components/Header/Header.style";
import SinglePage from "./components/SignlePage/SinglePage";
import { GlobalStyle } from "./global.style";
import Home from "./pages/Home/Home.component";

function App() {
  return (
    <>
      <HeaderMain />
      <Routes>
        <Route path="/" element={<Home type="popular" />} />
        <Route path="/top-rated" element={<Home type="top" />} />
        <Route path="/upcoming" element={<Home type="upcoming" />} />
        <Route path="/movies/:id" element={<SinglePage />} />
        <Route path="/actor/:id" element={<Actor />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
