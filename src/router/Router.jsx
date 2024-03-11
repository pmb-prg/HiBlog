import { Routes, Route, } from 'react-router-dom';
import Home from '../pages/Home';
import BlogPage from '../pages/BlogPage';
import AuthorPage from '../pages/AuthorPage';

function Router() {
  return (
    <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path='/blogs/:slug' element={<BlogPage />} />
        <Route path='/authors/:slug' element={<AuthorPage />} />
    </Routes>
  )
}

export default Router