import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/main';
import Chatbot from './pages/chatbot';
import Signup from './pages/signup';
import Login from './pages/login';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/main" element={<Main />} />
            <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
    );
}

export default App;
