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
import { AnimatePresence } from 'framer-motion'
import CryptoPage from './pages/CryptoPage/CryptoPage.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MediaContextProvider>
            <Router>
                <AnimatePresence mode="wait">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/dashboard" />
                        <Route path="/cryptoList" element={<CryptoList />} />
                        <Route path="/:id" element={<CryptoPage />} />
                        <Route path="/exchangeList" element={<ExhangeList />} />
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </AnimatePresence>
            </Router>
        </MediaContextProvider>
    </React.StrictMode>
)
