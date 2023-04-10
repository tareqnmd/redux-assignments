import { NavLink } from 'react-router-dom';
import AssignmentIcon from '../icons/AssignmentIcon';
import MarkIcon from '../icons/MarkIcon';
import QuizIcon from '../icons/QuizIcon';
import VideoIcon from '../icons/VideoIcon';
const DashboardInfo = () => {
	return (
		<div className="px-3 md:lg:xl:px-40  py-20 bg-opacity-10">
			<div className="grid grid-cols-1 md:grid-cols-2  gap-6 p-8">
				<NavLink
					to="/dashboard/videos"
					className="dashboard-item-card"
				>
					<VideoIcon />
					<p className="text-slate-200 mt-3 ">Videos</p>
				</NavLink>

				<NavLink
					to="/dashboard/assignments"
					className="dashboard-item-card"
				>
					<AssignmentIcon />
					<p className="text-slate-200 mt-3">Assignment</p>
				</NavLink>

				<NavLink
					to="/dashboard/quizzes"
					className="dashboard-item-card"
				>
					<QuizIcon />
					<p className="text-slate-200 mt-3 ">Quizzes</p>
				</NavLink>

				<NavLink
					to="/dashboard/assignment-marks"
					className="dashboard-item-card"
				>
					<MarkIcon />
					<p className="text-slate-200 mt-3 ">Assignment Mark</p>
				</NavLink>
			</div>
		</div>
	);
};

export default DashboardInfo;
