const LeaderBoardItem = ({ type, board }) => {
	const { rank, name, quizMark, assignmentMark, totalMark } = board || {};
	return (
		<tr
			className={
				type === 'self'
					? 'border-2 border-cyan'
					: 'border-b border-slate-600/50'
			}
		>
			<td
				className={`table-td text-center ${
					type === 'self' ? 'font-bold' : ''
				}`}
			>
				{rank}
			</td>
			<td
				className={`table-td text-center ${
					type === 'self' ? 'font-bold' : ''
				}`}
			>
				{name}
			</td>
			<td
				className={`table-td text-center ${
					type === 'self' ? 'font-bold' : ''
				}`}
			>
				{quizMark}
			</td>
			<td
				className={`table-td text-center ${
					type === 'self' ? 'font-bold' : ''
				}`}
			>
				{assignmentMark}
			</td>
			<td
				className={`table-td text-center ${
					type === 'self' ? 'font-bold' : ''
				}`}
			>
				{totalMark}
			</td>
		</tr>
	);
};

export default LeaderBoardItem;
