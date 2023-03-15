import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Create from './page/Create';
import Edit from './page/Edit';
import Home from './page/Home';
const App = () => {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/create"
						element={<Create />}
					/>
					<Route
						path="/edit/:editId"
						element={<Edit />}
					/>
				</Routes>
			</Layout>
		</Router>
	);
};

export default App;
