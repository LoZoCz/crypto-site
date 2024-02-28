import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import './assets/scss/main.scss'
import Home from './pages/Home/Home.tsx'
import Login from './pages/Login/Login.tsx'
import Register from './pages/Register/Register.tsx'
import About from './pages/About/About.tsx'
import NotFound from './pages/NotFound/NotFound.tsx'
import { MediaContextProvider } from './context/MediaContext.tsx'
import CryptoList from './pages/CryptoList/CryptoList.tsx'
import ExhangeList from './pages/ExchangeList/ExhangeList.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MediaContextProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/dashboard" />
                    <Route path="/cryptoList" element={<CryptoList />} />
                    <Route path="/cryptoDetails/:id" />
                    <Route path="/exchangeList" element={<ExhangeList />} />
                    <Route path="/exchangeDetails/:id" />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </Router>
        </MediaContextProvider>
    </React.StrictMode>
)

//? jesli to mozliwe popracuj nad aniamcja navbara oraz observerem na scroll

//? dodaj jakies animacje i upiekszenia strony

//? dodaj animacje przejscia pomedzy podstronami

//TODO responsywnosc na mniejsze ekrany (mniejsza wysokosc ekranu)

//TODO na stronie 'o nas' zawrzyj informacje o przebiegu projektu (dokaladnie to w pliku src/pages/About/utils/TimelineData.ts)

//TODO strona z krypto i giełdami
//TODO!! teraz zrob liste giełd (stylizacja jest, teraz tylko dane z api)

//TODO strona dla szczegolnych informacji o kryptowalutach i giełdach

//TODO dodac opcje logowania na stronie
//TODO dodac opcje rejestracji na stronie

//TODO strona dashboardu uzytkownika
