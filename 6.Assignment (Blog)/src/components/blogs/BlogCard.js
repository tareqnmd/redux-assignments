import { Link } from 'react-router-dom';
import Tags from '../ui/Tags';

const BlogCard = ({ blog = {} }) => {
	const { id, title, image, createdAt, likes, tags, isSaved } = blog;
	return (
		<div className="lws-card">
			<Link to={`/blog/${id}`}>
				<img src={image} className="lws-card-image" alt={title} />
			</Link>
			<div className="p-4">
				<div className="lws-card-header">
					<p className="lws-publishedDate">{createdAt}</p>
					<p className="lws-likeCount">
						<i className="fa-regular fa-thumbs-up"></i>
						{likes}
					</p>
				</div>
				<Link to={`/blog/${id}`} className="lws-postTitle">
					{title}
				</Link>
				<Tags tags={tags} />
				{isSaved && (
					<div className="flex gap-2 mt-4">
						<span className="lws-badge"> Saved </span>
					</div>
				)}
			</div>
		</div>
	);
};

export default BlogCard;
