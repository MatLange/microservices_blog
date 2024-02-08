import logo from './logo.svg';
import './App.css';
import PostCreate from './PostCreate';
import PostList from './PostList';

function App() {
  return (
    <div className="App">
        <PostCreate />
        <hr />
        <h1>Posts</h1>
        <PostList />  
    </div>
  );
}

export default App;
