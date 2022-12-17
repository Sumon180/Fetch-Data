import "./App.css";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Posts from "./features/posts/Posts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
