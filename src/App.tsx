import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { SideBar } from './components/SideBar';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SideBar />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
