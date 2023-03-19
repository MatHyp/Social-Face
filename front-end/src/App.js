import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/Login";
import RegisterPage from "./pages/RegisterPage/Register";
import { Typography } from "@mui/material";
import styled from "styled-components";

function App() {
  const Main = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap");
    margin: 0;
    padding: 0;
    background-color: #edf0f5;
    box-sizing: border-box;
    height: 97vh;
  `;
  let isAuth = true;
  return (
    <Main className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LoginPage />}
          />
          <Route
            path="/register"
            element={<RegisterPage />}
          />
        </Routes>
      </BrowserRouter>
    </Main>
  );
}

export default App;
