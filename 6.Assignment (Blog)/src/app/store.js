import { configureStore } from '@reduxjs/toolkit';
import blogReducer from '../features/blog/blogSlice';
import blogsReducer from '../features/blogs/blogsSlice';
import filterReducer from '../features/filter/filterSlice';
import relatedBlogsReducer from '../features/related-blogs/relatedBlogsSlice';

export const store = configureStore({
	reducer: {
		filter: filterReducer,
		blogs: blogsReducer,
		blog: blogReducer,
		relatedBlogs: relatedBlogsReducer,
	},
});
