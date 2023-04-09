import NextVideos from './NextVideos';
import VideoInfo from './VideoInfo';
import VideoPlayer from './VideoPlayer';

const Video = () => {
	return (
		<div className="grid grid-cols-3 gap-2 lg:gap-8">
			<div className="col-span-full w-full space-y-8 lg:col-span-2">
				<VideoPlayer />
				<VideoInfo />
			</div>
			<NextVideos />
		</div>
	);
};

export default Video;
