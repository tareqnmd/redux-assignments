import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addJob, deleteJob, editJob, fetchJobs } from './jobAPI';

const initialState = {
	jobs: [],
	isLoading: false,
	isError: false,
	error: '',
	editJobData: {},
};

export const getAllJobs = createAsyncThunk('fetch/fetchJobs', async () => {
	const data = await fetchJobs();
	return data;
});

export const createJob = createAsyncThunk('fetch/createJob', async (data) => {
	await addJob(data);
});

export const changeJob = createAsyncThunk('fetch/changeJob', async (data) => {
	await editJob(data);
});

export const removeJob = createAsyncThunk('fetch/deleteJob', async (id) => {
	await deleteJob(id);
});

const jobSlice = createSlice({
	name: 'jobs',
	initialState,
	reducers: {
		addEditData: (state, action) => {
			state.editJobData = action.payload;
		},
		removeEditData: (state, action) => {
			state.editJobData = {};
		},
	},
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
			})
			.addCase(createJob.pending, (state, action) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(createJob.fulfilled, (state, action) => {
				state.jobs.push(action.payload);
				state.isError = false;
				state.isLoading = false;
			})
			.addCase(createJob.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.error = action.error.message;
			})
			.addCase(changeJob.pending, (state, action) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(changeJob.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				const findIndex = state.jobs.findIndex((item) => item.id === action.payload.id);
				state.jobs[findIndex] = action.payload;
			})
			.addCase(changeJob.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.error = action.error.message;
			})
			.addCase(removeJob.pending, (state, action) => {
				state.isLoading = true;
				state.isError = false;
			})
			.addCase(removeJob.fulfilled, (state, action) => {
				state.jobs = state.jobs.filter((item) => item.id !== action.arg.id);
				state.isLoading = false;
				state.isError = false;
			})
			.addCase(removeJob.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.error = action.error.message;
			});
	},
});
export const { addEditData, removeEditData } = jobSlice.actions;
export default jobSlice.reducer;
