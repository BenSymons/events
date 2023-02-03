import './App.css';
import FormContainer from './components/FormContainer';
import Header from './components/Header';
import PostContainer from './components/PostContainer';
import postData from "./data/posts.json"

function App() {

  return (
    <div className="App">
      <Header/>
      <FormContainer/>
      <PostContainer posts={postData}/>
    </div>
  );
}

export default App;
