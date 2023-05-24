import "./App.css";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About/About";
import PostList from "./pages/PostList/PostList";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SinglePost from "./pages/SinglePost/SinglePost";

function App() {
  return (
    <div>
      <div className="app-wrapper">
        <Header />
        <Layout />

        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/create" element={<SinglePost />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
