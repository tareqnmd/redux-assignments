import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBlogs } from '../../features/blogs/blogsSlice';
import Pagination from '../ui/Pagination';
import BlogCard from './BlogCard';

const BlogList = () => {
	const dispatch = useDispatch();
	const { blogs } = useSelector((state) => state.blogs);
	const filter = useSelector((state) => state.filter);
	useEffect(() => {
		dispatch(fetchBlogs(filter));
	}, [dispatch, filter]);
	return (
		<>
			<main id="lws-postContainer">
				<div className="post-container">
					{blogs.map((blog) => (
						<BlogCard key={blog.id} blog={blog} />
					))}
				</div>
				<Pagination />
			</main>
		</>
	);
};

export default BlogList;
