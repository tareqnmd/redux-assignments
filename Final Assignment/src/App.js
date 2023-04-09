import { Route, Routes } from 'react-router-dom';

import Layout from './components/common/Layout';
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentLeaderBoard from './pages/student/StudentLeaderBoard';
import StudentLogin from './pages/student/StudentLogin';
import StudentQuiz from './pages/student/StudentQuiz';
import StudentRegistration from './pages/student/StudentRegistration';
import StudentVideo from './pages/student/StudentVideo';
import './style/global.scss';
const App = () => {
	return (
		<Layout>
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
				<Route
					path="/dashboard"
					element={<AdminDashboard />}
				/>
			</Routes>
		</Layout>
	);
};

export default App;
