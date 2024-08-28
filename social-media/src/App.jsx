import './App.css'
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className='app-content'>
      <Sidebar></Sidebar>
      <div className='content'>
        <Header></Header>
        <CreatePost></CreatePost>
        <PostList></PostList>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
