import { useSelector } from 'react-redux';

const Project = ({ project }) => {
	const { colorClass, projectName } = project || {};
	const { checked = [] } = useSelector((state) => state.projects);
	const stateChange = (e) => {
		const { checked } = e.target;
		console.log('checked', checked);
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
