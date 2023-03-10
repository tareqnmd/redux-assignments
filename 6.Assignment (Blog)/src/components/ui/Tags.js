const Tags = ({ tags = [] }) => {
	return (
		<div className="lws-tags">
			{tags?.map((tag, index) => (
				<span key={index}>
					{tag}
					{index !== tags.length - 1 ? ',' : ''}
				</span>
			))}
		</div>
	);
};

export default Tags;
