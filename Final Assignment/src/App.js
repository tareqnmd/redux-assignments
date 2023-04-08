import { Route, Routes } from 'react-router-dom';
import StudentLogin from './pages/student/StudentLogin';
import './style/global.scss';
const App = () => {
	return (
		<>
			<StudentLogin />
			<Routes>
				<Route
					path="/"
					element={<StudentLogin />}
				/>
			</Routes>
		</>
	);
};

export default App;
