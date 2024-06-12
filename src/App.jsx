import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.jsx"
import VideoPage from "./components/VideoPage.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/room/:id" element={<VideoPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
