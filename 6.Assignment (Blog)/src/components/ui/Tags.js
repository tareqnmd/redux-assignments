const Tags = ({ tags = [] }) => {
	return (
		<div className="lws-tags">
			{tags?.map((tag) => (
				<span>{tag}</span>
			))}
		</div>
	);
};

export default Tags;
