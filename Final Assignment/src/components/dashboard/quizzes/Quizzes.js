import Quiz from './Quiz';

const Quizzes = () => {
	return (
		<>
			<div className="w-full flex">
				<button className="btn ml-auto">Add Quiz</button>
			</div>
			<div className="overflow-x-auto mt-4">
				<table className="divide-y-1 text-base divide-gray-600 w-full">
					<thead>
						<tr>
							<th className="table-th">Question</th>
							<th className="table-th">Video</th>
							<th className="table-th justify-center">Action</th>
						</tr>
					</thead>

					<tbody className="divide-y divide-slate-600/50">
						<Quiz />
					</tbody>
				</table>
			</div>
		</>
	);
};

export default Quizzes;
