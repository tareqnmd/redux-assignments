import LeaderBoardHeader from './LeaderBoardHeader';
import LeaderBoardItem from './LeaderBoardItem';

const LeaderBoard = () => {
	return (
		<>
			<div>
				<h3 className="text-lg font-bold">Your Position in Leaderboard</h3>
				<table className="text-base w-full border border-slate-600/50 rounded-md my-4">
					<LeaderBoardHeader />
					<tbody>
						<LeaderBoardItem type="self" />
					</tbody>
				</table>
			</div>
			<div className="my-8">
				<h3 className="text-lg font-bold">Top 20 Result</h3>
				<table className="text-base w-full border border-slate-600/50 rounded-md my-4">
					<LeaderBoardHeader />
					<tbody>
						<LeaderBoardItem />
					</tbody>
				</table>
			</div>
		</>
	);
};

export default LeaderBoard;
