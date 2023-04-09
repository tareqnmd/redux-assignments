import SingleQuiz from './SingleQuiz';

const Quiz = () => {
	const { video_title } = {};
	return (
		<>
			<div className="mb-8">
				<h1 className="text-2xl font-bold">{video_title}</h1>
				<p className="text-sm text-slate-200">
					Each question contains 5 Mark
				</p>
			</div>
			<div className="space-y-8 ">
				<SingleQuiz />
			</div>
			<button className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">
				Submit
			</button>
		</>
	);
};

export default Quiz;
