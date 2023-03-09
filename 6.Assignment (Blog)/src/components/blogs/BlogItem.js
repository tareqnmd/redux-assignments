import Tags from '../ui/Tags';
import RelatedBlogs from './RelatedBlogs';

const BlogItem = () => {
	const { title, image, description, likes, tags, isSaved } = {};
	return (
		<section className="post-page-container">
			<main className="post">
				<img src={image} alt={title} className="w-full rounded-md" id="lws-megaThumb" />
				<div>
					<h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
						{title}
					</h1>
					<Tags tags={tags} />
					<div className="btn-group">
						<button className="like-btn" id="lws-singleLinks">
							<i className="fa-regular fa-thumbs-up"></i> {likes}
						</button>
						<button className="active save-btn" id="lws-singleSavedBtn">
							<i className="fa-regular fa-bookmark"></i> {isSaved ? 'Saved' : 'Save'}
						</button>
					</div>
					<div className="mt-6">
						<p>{description}</p>
					</div>
				</div>
			</main>
			<RelatedBlogs />
		</section>
	);
};

export default BlogItem;
