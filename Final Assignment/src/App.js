import { Route, Routes } from 'react-router-dom';
import Layout from './components/common/Layout';
import Quiz from './components/student/quiz/Quiz';
import AssignmentList from './pages/admin/AssignmentList';
import AssignmentMarkList from './pages/admin/AssignmentMarkList';
import Dashboard from './pages/admin/Dashboard';
import QuizList from './pages/admin/QuizList';
import VideoList from './pages/admin/VideoList';
import LeaderBoard from './pages/student/LeaderBoard';
import Login from './pages/student/Login';
import Registration from './pages/student/Registration';
import Video from './pages/student/Video';
import './style/global.scss';
const App = () => {
	return (
		<Layout>
			<Routes>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/registration"
					element={<Registration />}
				/>

				<Route
					path="/quiz"
					element={<Quiz />}
				/>
				<Route
					path="/leader-board"
					element={<LeaderBoard />}
				/>
				<Route
					path="/video/:videoId"
					element={<Video />}
				/>
				<Route
					path="/dashboard"
					element={<Dashboard />}
				/>
				<Route
					path="/dashboard/videos"
					element={<VideoList />}
				/>
				<Route
					path="/dashboard/quizzes"
					element={<QuizList />}
				/>
				<Route
					path="/dashboard/assignments"
					element={<AssignmentList />}
				/>
				<Route
					path="/dashboard/assignment-marks"
					element={<AssignmentMarkList />}
				/>
			</Routes>
		</Layout>
	);
};

export default App;
