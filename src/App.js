import { GlobalStyles } from './styles/GlobalStyles';
import { Route, Routes } from 'react-router';
import '@fontsource/rubik/600.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/400.css';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Todos from './pages/Todos';
import { useEffect, useState } from 'react';

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(localStorage.getItem('todos_token'));
  }, []);

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={token.length > 0 ? <Todos /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </>
  );
}

export default App;
