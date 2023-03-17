import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllJobs, removeEditData } from '../features/job/jobSlice';

const Sidebar = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const typeChangeHandler = (type) => {
		dispatch(getAllJobs({ type }));
	};

	const route = (type = '/') => {
		type === '/' && dispatch(getAllJobs());
		navigate(type);
		dispatch(removeEditData());
	};
	return (
		<div className="sidebar">
			<nav>
				<ul className="space-y-4">
					<li>
						<span
							onClick={() => route('/')}
							className={`main-menu cursor-pointer ${
								location.pathname === '/' ? 'menu-active' : ''
							}`}
							id="home"
						>
							<i className="fa-solid fa-briefcase"></i>
							<span> All Available Jobs</span>
						</span>
						<ul className="space-y-6 lg:space-y-2 ">
							<li onClick={() => typeChangeHandler('Internship')}>
								<span className="sub-menu cursor-pointer">
									<i className="mr-1 fa-solid fa-stop !text-[#FF5757]"></i>
									Internship
								</span>
							</li>
							<li onClick={() => typeChangeHandler('Full Time')}>
								<span className="sub-menu cursor-pointer">
									<i className="mr-1 fa-solid fa-stop !text-[#FF8A00]"></i>
									Full Time
								</span>
							</li>
							<li onClick={() => typeChangeHandler('Remote')}>
								<span className="sub-menu cursor-pointer">
									<i className="mr-1 fa-solid fa-stop !text-[#56E5C4]"></i>
									Remote
								</span>
							</li>
						</ul>
					</li>
					<li>
						<span
							onClick={() => route('/create')}
							className={`main-menu cursor-pointer ${
								location.pathname === '/create' ? 'menu-active' : ''
							}`}
							id="create"
						>
							<i className="mr-1 fa-solid fa-file-circle-plus"></i>
							<span>Add NewJob</span>
						</span>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
