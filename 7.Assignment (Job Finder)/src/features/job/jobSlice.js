import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchJobs } from './jobAPI';

const initialState = {
	jobs: [],
	isLoading: false,
	isError: false,
	error: '',
	editJobData: {},
};

export const getAllJobs = createAsyncThunk('fetch/jobs', async () => {
	const data = await fetchJobs();
	return data;
});

const jobSlice = createSlice({
	name: 'jobs',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllJobs.pending, (state, action) => {
				state.jobs = [];
				state.isLoading = true;
				state.isError = false;
				state.error = '';
			})
			.addCase(getAllJobs.fulfilled, (state, action) => {
				state.jobs = action.payload;
				state.isLoading = false;
				state.isError = false;
				state.error = '';
			})
			.addCase(getAllJobs.rejected, (state, action) => {
				state.jobs = [];
				state.isLoading = false;
				state.isError = true;
				state.error = action.error.message;
			});
	},
});

export default jobSlice.reducer;
