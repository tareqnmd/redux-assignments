import { Route, Routes } from 'react-router-dom';

import StudentLeaderBoard from './pages/student/StudentLeaderBoard';
import StudentLogin from './pages/student/StudentLogin';
import StudentQuiz from './pages/student/StudentQuiz';
import StudentRegistration from './pages/student/StudentRegistration';
import StudentVideo from './pages/student/StudentVideo';
import './style/global.scss';
const App = () => {
	return (
		<Routes>
			<Route
				path="/login"
				element={<StudentLogin />}
			/>
			<Route
				path="/registration"
				element={<StudentRegistration />}
			/>
			<Route
				path="/quiz"
				element={<StudentQuiz />}
			/>
			<Route
				path="/leader-board"
				element={<StudentLeaderBoard />}
			/>
			<Route
				path="/video/:videoId"
				element={<StudentVideo />}
			/>
		</Routes>
	);
};

export default App;
