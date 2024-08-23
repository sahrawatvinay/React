import './App.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <Header></Header>
      <Footer></Footer>
    </>
  );
}

export default App;
