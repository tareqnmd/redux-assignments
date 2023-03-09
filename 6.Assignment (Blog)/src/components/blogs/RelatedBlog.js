import { Link } from 'react-router-dom';
import Tags from '../ui/Tags';

const RelatedBlog = ({ blog = {} }) => {
	const { id, title, image, createdAt, tags } = blog;

	return (
		<div className="card">
			<Link to={`blog/${id}`}>
				<img src={image} className="card-image" alt={title} />
			</Link>
			<div className="p-4">
				<Link to={`blog/${id}`} className="text-lg post-title lws-RelatedPostTitle">
					{title}
				</Link>
				<Tags tags={tags} />
				<p>{createdAt}</p>
			</div>
		</div>
	);
};

export default RelatedBlog;
