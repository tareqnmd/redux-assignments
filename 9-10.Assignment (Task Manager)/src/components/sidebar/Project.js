const Project = ({ project }) => {
	const { colorClass, projectName } = project || {};
	const stateChange = (e) => {
		const { checked } = e.target;
		console.log('checked', checked);
	};
	return (
		<div className="checkbox-container">
			<input
				type="checkbox"
				className={colorClass}
				onChange={stateChange}
			/>
			<p className="label">{projectName}</p>
		</div>
	);
};

export default Project;
