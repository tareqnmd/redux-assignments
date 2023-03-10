import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getBlog from './blogAPI';

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

const blogSlice = createSlice({
	name: 'blog',
	initialState,
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
	},
});

export default blogSlice.reducer;
