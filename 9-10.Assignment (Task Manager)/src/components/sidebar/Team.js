const Team = ({ team }) => {
	const { avatar, name } = team || {};
	return (
		<div className="checkbox-container">
			<img
				src={avatar}
				alt=""
				className="team-avater"
			/>
			<p className="label">{name}</p>
		</div>
	);
};

export default Team;
