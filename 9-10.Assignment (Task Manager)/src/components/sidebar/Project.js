import { useDispatch, useSelector } from 'react-redux';
import { removeCheckedProjects, setCheckedProjects } from '../../features/projects/projectsSlice';

const Project = ({ project }) => {
	const { id, colorClass, projectName } = project || {};
	const { checked = [] } = useSelector((state) => state.projects);
	const dispatch = useDispatch();
	const stateChange = (e) => {
		const { checked } = e.target;
		if (checked) {
			dispatch(setCheckedProjects(id));
		} else {
			dispatch(removeCheckedProjects(id));
		}
	};
	return (
		<div className="checkbox-container">
			<input
				type="checkbox"
				className={colorClass}
				checked={checked.includes(id)}
				onChange={stateChange}
			/>
			<p className="label">{projectName}</p>
		</div>
	);
};

export default Project;
