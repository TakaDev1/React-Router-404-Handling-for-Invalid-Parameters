import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Article from "./pages/Article";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <h1>React-Router-404-Handling-for-Invalid-Parameters</h1>
          <Routes>
            <Route path="/article/:id" element={<Article />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
