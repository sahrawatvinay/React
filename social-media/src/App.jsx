import './App.css';
import { useState } from 'react';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import PostListProvider from './store/posts-list-store';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let [selectedTab, setSelectedtab] = useState("Home");
  return (
    <PostListProvider>
    <div className='app-content'>
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedtab}></Sidebar>
      <div className='content'>
        <Header></Header>
        {selectedTab === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}
        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
