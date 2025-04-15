import './App.css';
import HomePage from '~/components/HomePage';
import { useGetPostsQuery } from '~/query/services/posts.ts';
import { Routes, Route } from 'react-router-dom';
import { Header } from '~/components/Header';
function App() {
    
  const { data: _data, isLoading: _isLoading } = useGetPostsQuery();

  return (
   <>
   <Header />
    <Routes> {/* Определите маршруты */}
    <Route path="/" element={<HomePage />} />
    </Routes><HomePage />
        </>
    );
}

export default App;
