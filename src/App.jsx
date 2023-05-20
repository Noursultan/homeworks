import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import PostList from "./pages/PostList/PostList";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <div className="app-wrapper">
        <Header />
        <Layout />

        <Routes>
          <Route path="posts" element={<PostList />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
