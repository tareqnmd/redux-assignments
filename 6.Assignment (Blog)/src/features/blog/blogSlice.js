import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getBlog, { likeBlog, toggleBookmark } from './blogAPI';

const initialState = {
	blog: {},
	isLoading: true,
	isError: false,
	error: '',
};

export const fetchBlog = createAsyncThunk('blog/fetchBlog', async (id) => {
	const blog = getBlog(id);
	return blog;
});
export const blogBookmark = createAsyncThunk('blog/blogBookmark', async ({ id, isSaved }) => {
	const blog = toggleBookmark(id, isSaved);
	return blog;
});
export const blogLikes = createAsyncThunk('blog/blogLikes', async ({ id, likes }) => {
	const blog = likeBlog(id, likes);
	return blog;
});

const blogSlice = createSlice({
	name: 'blog',
	initialState,
	reducers: {
		blogsPage: (state, action) => {
			// state.page = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchBlog.pending, (state, action) => {
			state.blog = {};
			state.isLoading = true;
			state.isError = false;
			state.error = '';
		});
		builder.addCase(fetchBlog.fulfilled, (state, action) => {
			state.blog = action.payload;
			state.isLoading = false;
			state.isError = false;
			state.error = '';
		});
		builder.addCase(fetchBlog.rejected, (state, action) => {
			state.blog = {};
			state.isLoading = true;
			state.isError = true;
			state.error = action.error.message;
		});
		builder.addCase(blogBookmark.fulfilled, (state, action) => {
			state.blog = { ...state.blog, isSaved: action.payload.isSaved };
		});
		builder.addCase(blogLikes.fulfilled, (state, action) => {
			state.blog = { ...state.blog, likes: action.payload.likes };
		});
	},
});

export default blogSlice.reducer;
