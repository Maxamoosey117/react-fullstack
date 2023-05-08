import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Factions from './Components/Factions/Factions';
import NavMenu from './Components/NavMenu';

function Router() {
    return (
        <BrowserRouter>
            <NavMenu />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/factions" element={<Factions />} />
            </Routes>
        </BrowserRouter>
    );
}


export default Router;
