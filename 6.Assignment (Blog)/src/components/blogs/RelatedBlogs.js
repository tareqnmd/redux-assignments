import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRelatedBlogs } from '../../features/related-blogs/relatedBlogsSlice';
import RelatedBlog from './RelatedBlog';

const RelatedBlogs = ({ tags, id }) => {
	const dispatch = useDispatch();
	const { relatedBlogs } = useSelector((state) => state.relatedBlogs);
	useEffect(() => {
		dispatch(fetchRelatedBlogs({ tags, id }));
	}, [dispatch, tags, id]);
	return (
		<aside>
			<h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
				Related Posts
			</h4>
			<div className="space-y-4 related-post-container">
				{relatedBlogs?.map((blog) => (
					<RelatedBlog blog={blog} />
				))}
			</div>
		</aside>
	);
};

export default RelatedBlogs;
