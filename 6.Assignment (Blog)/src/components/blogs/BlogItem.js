import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchBlog } from '../../features/blog/blogSlice';
import Tags from '../ui/Tags';
import RelatedBlogs from './RelatedBlogs';

const BlogItem = () => {
	const { blogId } = useParams();
	const dispatch = useDispatch();
	const { blog } = useSelector((state) => state.blog);
	const { id, title, image, description, likes, tags, isSaved } = blog;
	useEffect(() => {
		dispatch(fetchBlog(blogId));
	}, [blogId, dispatch]);
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
			<RelatedBlogs id={id} tags={tags} />
		</section>
	);
};

export default BlogItem;
