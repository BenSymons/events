import './App.css';
import FormContainer from './components/FormContainer';
import Header from './components/Header';
import PostContainer from './components/PostContainer';
import postData from "./data/posts.json"
import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

function App() {

  const [posts, setPosts] = useState(postData)
  const [level, setLevel] = useState("shallow")
  
  const handleScroll = throttle(() => {
    console.log("scrolling...")
    if(window.scrollY > 200) {
      setLevel("deep")
    } else if(level==="deep" && window.scrollY <= 200) {
      setLevel("shallow")
    }
  }, 500)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [level, handleScroll])


  // console.log(level, "<-- level")

  return (
    <div className="App">
      { level === "shallow" && <Header/>}
      <FormContainer setPosts={setPosts}/>
      <PostContainer posts={posts}/>
    </div>
  );
}

export default App;
