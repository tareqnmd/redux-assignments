import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Add from './pages/Add';
import Edit from './pages/Edit';
import Home from './pages/Home';
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
						path="/add"
						element={<Add />}
					/>
					<Route
						path="/edit/:bookId"
						element={<Edit />}
					/>
				</Routes>
			</Layout>
		</Router>
	);
};

export default App;
