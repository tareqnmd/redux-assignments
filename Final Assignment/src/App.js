import { Route, Routes } from 'react-router-dom';
import StudentLeaderBoard from './pages/student/StudentLeaderBoard';
import StudentLogin from './pages/student/StudentLogin';
import StudentQuiz from './pages/student/StudentQuiz';
import StudentRegistration from './pages/student/StudentRegistration';
import './style/global.scss';
const App = () => {
	return (
		<Routes>
			<Route
				path="/student/login"
				element={<StudentLogin />}
			/>
			<Route
				path="/student/registration"
				element={<StudentRegistration />}
			/>
			<Route
				path="/student/quiz"
				element={<StudentQuiz />}
			/>
			<Route
				path="/student/leader-board"
				element={<StudentLeaderBoard />}
			/>
		</Routes>
	);
};

export default App;
