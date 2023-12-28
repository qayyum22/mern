import { Route, Routes } from 'react-router-dom';
import './App.css';
import Posts from './components/jsonplaceholder/Posts';
import HomePage from './pages/HomePage';
import Comments from './components/jsonplaceholder/Comments';
import Albums from './components/jsonplaceholder/Albums';
import Photos from './components/jsonplaceholder/Photos';
import Todos from './components/jsonplaceholder/Todos';
import Users from './components/jsonplaceholder/Users';
import JSON from './pages/jsonplaceholder';
import Resources from './pages/Resources';


function App() {
  return (
    <div className="App">
      <h1 className='text-3xl m-5'>Awesome Tools</h1>
      <HomePage />
      <Routes>

        <Route path='/resources' element={<Resources />} />

        <Route path='/json' element={<JSON />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div >
  );
}

export default App;
