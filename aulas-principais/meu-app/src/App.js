import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './desafioComponents/pages/Home';
import Produtos from './desafioComponents/pages/Produtos';
import Header from './desafioComponents/global/header/Header'

const App = () => {
	return (
		<BrowserRouter>
			<Header/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="produtos" element={<Produtos/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default App;
