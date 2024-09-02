import "./App.css";
import { Outlet } from "react-router-dom";
import PostListProvider from "../store/posts-list-store";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // let [selectedTab, setSelectedtab] = useState("Home");
  return (
    <PostListProvider>
      <div className="app-content">
        <Sidebar></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
