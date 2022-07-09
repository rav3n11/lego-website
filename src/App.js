import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';
import HomePage from './pages/Home';
import './App.css';
import Error404 from './pages/Error404';
import ComingSoon from './pages/ComingSoon';


function App() {
  return (
    <BrowserRouter basename={'/'} element={<HomePage />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/404" element={<Error404 />} />
        <Route path="/ComingSoon" element={<ComingSoon />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
