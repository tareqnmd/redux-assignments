import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../features/blogs/blogsSlice';
import BlogCard from './BlogCard';

const BlogList = () => {
	const dispatch = useDispatch();
	const { blogs } = useSelector((state) => state.blogs);
	const filter = useSelector((state) => state.filter);
	useEffect(() => {
		dispatch(fetchBlogs(filter));
	}, [dispatch, filter]);
	return (
		<main className="post-container" id="lws-postContainer">
			{blogs.map((blog) => (
				<BlogCard key={blog.id} blog={blog} />
			))}
		</main>
	);
};

export default BlogList;
