import { NavLink } from 'react-router-dom';
import PlayIcon from '../../common/PlayIcon';

const NextVideo = ({ video }) => {
	const { title, views, duration } = video || {};
	return (
		<div className="w-full flex flex-row gap-2 cursor-pointer hover:bg-slate-900 p-2 py-3">
			<PlayIcon />
			<div className="flex flex-col w-full">
				<NavLink>
					<p className="text-slate-50 text-sm font-medium">{title}</p>
				</NavLink>
				<div>
					<span className="text-gray-400 text-xs mt-1">
						{duration} Mins
					</span>
					<span className="text-gray-400 text-xs mt-1"> | </span>
					<span className="text-gray-400 text-xs mt-1">
						{views} views
					</span>
				</div>
			</div>
		</div>
	);
};

export default NextVideo;
