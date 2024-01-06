import Header from './Common/Header';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DisplayMissionData from './Pages/DisplayMissionData';
import Charts from './Pages/Charts';
import BackGroundImage from './Common/BackGroundImage';
function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <BackGroundImage></BackGroundImage>
                <Header></Header>
                <Routes>
                    <Route path="/" element={<LoginPage />} exact></Route>
                    <Route
                        path="/display"
                        element={<DisplayMissionData />}
                        exact
                    ></Route>
                    <Route path="/Charts" element={<Charts />} exact></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
