import { NavLink } from 'react-router-dom';
import AssignmentIcon from './AssignmentIcon';
import MarkIcon from './MarkIcon';
import QuizIcon from './QuizIcon';
import VideoIcon from './VideoIcon';

const Dashboard = () => {
	return (
		<div class="px-3 md:lg:xl:px-40  py-20 bg-opacity-10">
			<div class="grid grid-cols-1 md:grid-cols-2  gap-6 p-8">
				<NavLink
					to="/videos"
					class="dashboard-item-card"
				>
					<VideoIcon />
					<p class="text-slate-200 mt-3 ">Videos</p>
				</NavLink>

				<NavLink
					to="/assignments"
					class="dashboard-item-card"
				>
					<AssignmentIcon />
					<p class="text-slate-200 mt-3">Assignment</p>
				</NavLink>

				<NavLink
					to="/quizzes"
					class="dashboard-item-card"
				>
					<QuizIcon />
					<p class="text-slate-200 mt-3 ">Quizzes</p>
				</NavLink>

				<NavLink
					to="/assignment-mark"
					class="dashboard-item-card"
				>
					<MarkIcon />
					<p class="text-slate-200 mt-3 ">Assignment Mark</p>
				</NavLink>
			</div>
		</div>
	);
};

export default Dashboard;
