import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from '../components/PostList';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import CreatePost from '../components/CreatePost';
import { useState } from 'react';
import PostListProvider from '../store/Post-list-store';

function App() {

  const [SelectedTab, SetSelectedTab] = useState('Home');

  return (
    <>
    <PostListProvider >
      <div className="app-container">
        <Sidebar SelectedTab={SelectedTab} SetSelectedTab={SetSelectedTab}></Sidebar>
        <div className="content">
          <Header></Header>
          {SelectedTab === 'Home' ? (<PostList></PostList>) : (<CreatePost></CreatePost>)}
          <Footer></Footer>
        </div>
      </div>
     </PostListProvider>
    </>
  );
}

export default App;
