const LeaderBoardItem = ({ type }) => {
	return (
		<>
			{type === 'self' ? (
				<tr className="border-2 border-cyan">
					<td className="table-td text-center font-bold">4</td>
					<td className="table-td text-center font-bold">Saad Hasan</td>
					<td className="table-td text-center font-bold">50</td>
					<td className="table-td text-center font-bold">50</td>
					<td className="table-td text-center font-bold">100</td>
				</tr>
			) : (
				<tr className="border-b border-slate-600/50">
					<td className="table-td text-center">4</td>
					<td className="table-td text-center">Saad Hasan</td>
					<td className="table-td text-center">50</td>
					<td className="table-td text-center">50</td>
					<td className="table-td text-center">100</td>
				</tr>
			)}
		</>
	);
};

export default LeaderBoardItem;
