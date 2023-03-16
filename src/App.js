import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Catalog } from './components/Catalog/Catalog';

import * as gameService from './services/gameService';

import { Create } from "./components/Create/Create";
import { Details } from "./components/Details/Details";
import { Edit } from "./components/Edit/Edit";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

function App() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => {
                setGames(result)
            });
    }, []);

    return (
        <div id="box">
            <Header />

            <main id="main-content">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/edit/:gameId' element={<Edit />} />
                    <Route path='/details/:gameId' element={<Details />} />
                    <Route path='/catalog' element={<Catalog games={games} />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;