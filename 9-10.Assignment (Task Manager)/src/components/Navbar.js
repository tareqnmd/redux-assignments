import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import { searchTasks } from '../features/tasks/tasksSlice';
const Navbar = () => {
	const dispatch = useDispatch();
	const stateChange = (e) => {
		const { value = '' } = e.target;
		dispatch(searchTasks(value));
	};
	return (
		<nav className="container relative py-3">
			<div className="flex items-center justify-between">
				<Link to="/">
					<img
						src={logo}
						alt="logo"
					/>
				</Link>
				<div className="flex-1 max-w-xs search-field group">
					<i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
					<input
						type="text"
						placeholder="Search Task"
						className="search-input"
						id="lws-searchTask"
						onChange={stateChange}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
