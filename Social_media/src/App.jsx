import { useState } from 'react';
import './App.css'
import CreatePost from './Components/CreatePost';
import Footer from './Components/Footer';
import Header from './Components/Header';
import PostList from './Components/PostList';
import SideBar from './Components/SideBar';
import PostListProvider from './store/post-list-store';
function App() {
  const [selectedTab,setSelectedTab] = useState("Home");

  return (
    <>
    <PostListProvider>
    <div className="app-container">
    <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></SideBar>
    <div className="container">
    <Header></Header>
    {selectedTab==="Home" ?(<PostList></PostList>):(<CreatePost></CreatePost>)}
    
    <Footer></Footer>
    </div>
    </div>
   </PostListProvider>
   </>
  );
}

export default App;
