import RelatedBlog from './RelatedBlog';

const RelatedBlogs = () => {
	return (
		<aside>
			<h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
				Related Posts
			</h4>
			<div className="space-y-4 related-post-container">
				<RelatedBlog />
			</div>
		</aside>
	);
};

export default RelatedBlogs;
