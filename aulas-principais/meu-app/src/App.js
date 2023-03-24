import React from 'react';
import Home from './desafioComponents/pages/Home';
import Produtos from './desafioComponents/pages/Produtos';


const App = () => {
	const { pathname } = window.location;
	let Component = pathname == "/produtos" ? Produtos : Home;

	return (
		<Component/>
	)
}

export default App;
