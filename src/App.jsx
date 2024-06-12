import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage.jsx"
import VideoPage from "./components/VideoPage.jsx"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/room/:id" element={<VideoPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
