import { NavLink } from 'react-router-dom';

const VideoInfo = ({ video }) => {
	const { title, description, createdAt } = video || {};

	return (
		<div>
			<h1 className="text-lg font-semibold tracking-tight text-slate-100">
				{title}
			</h1>
			<h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">
				Uploaded on {createdAt}
			</h2>

			<div className="flex gap-4">
				<NavLink
					to={``}
					className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
				>
					Assignment
				</NavLink>

				<NavLink
					to={``}
					className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary"
				>
					Quiz
				</NavLink>
			</div>
			<p className="mt-4 text-sm text-slate-400 leading-6">
				{description}
			</p>
		</div>
	);
};

export default VideoInfo;
