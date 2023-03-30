import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Add from './pages/Add';
import Edit from './pages/Edit';
import Home from './pages/Home';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Layout>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					></Route>
					<Route
						path="/add"
						element={<Add />}
					></Route>
					<Route
						path="/edit/:id"
						element={<Edit />}
					></Route>
				</Routes>
			</Layout>
		</Router>
	);
};

export default App;
