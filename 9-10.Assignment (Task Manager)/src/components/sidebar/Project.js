import { useDispatch, useSelector } from 'react-redux';
import { removeCheckedProjects, setCheckedProjects } from '../../features/projects/projectsSlice';

const Project = ({ project }) => {
	const { colorClass, projectName } = project || {};
	const { checked = [] } = useSelector((state) => state.projects);
	const dispatch = useDispatch();
	const stateChange = (e) => {
		const { checked } = e.target;
		if (checked) {
			dispatch(setCheckedProjects(projectName));
		} else {
			dispatch(removeCheckedProjects(projectName));
		}
	};
	return (
		<div className="checkbox-container">
			<input
				type="checkbox"
				className={colorClass}
				checked={checked.includes(projectName)}
				onChange={stateChange}
			/>
			<p className="label">{projectName}</p>
		</div>
	);
};

export default Project;
