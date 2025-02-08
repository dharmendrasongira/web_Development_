 import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

import { useState } from 'react';
import PostListProvider from '../store/Post-list-store';
import { Outlet } from'react-router-dom';

function App() {

  const [SelectedTab, SetSelectedTab] = useState('Home');

  return (
    <>
    <PostListProvider >
      <div className="app-container">
        <Sidebar SelectedTab={SelectedTab} SetSelectedTab={SetSelectedTab}></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
     </PostListProvider>
    </>
  );
}

export default App;
