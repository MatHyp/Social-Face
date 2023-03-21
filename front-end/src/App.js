//Packages and react
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

//Pages and components
import LoginPage from "./pages/LoginPage/Login";
import RegisterPage from "./pages/RegisterPage/Register";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const Main = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap");
    margin: 0;
    padding: 0;
    background-color: #edf0f5;
    box-sizing: border-box;
    height: 97vh;
  `;

  const isAuth = Boolean(useSelector((state) => state.token));

  return (
    <Main className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuth ? <HomePage /> : <LoginPage />}
          />
          <Route
            path="/register"
            element={isAuth ? <HomePage /> : <RegisterPage />}
          />
          <Route
            path="/"
            element={isAuth ? <HomePage /> : <LoginPage />}
          />
        </Routes>
      </BrowserRouter>
    </Main>
  );
}

export default App;
