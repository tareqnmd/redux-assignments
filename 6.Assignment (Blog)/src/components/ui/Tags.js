const Tags = ({ tags = [] }) => {
	return (
		<div className="lws-tags">
			{tags?.map((tag, index) => (
				<span key={index}>{tag}</span>
			))}
		</div>
	);
};

export default Tags;
