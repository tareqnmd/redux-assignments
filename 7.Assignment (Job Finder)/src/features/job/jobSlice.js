import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addJob, deleteJob, editJob, fetchJobs } from './jobAPI';

const initialState = {
	jobs: [],
	isLoading: false,
	isError: false,
	error: '',
	editJobData: {},
	searchText: '',
	sort: '',
};

export const getAllJobs = createAsyncThunk('fetch/fetchJobs', async ({ type = '' } = {}) => {
	const data = await fetchJobs(type);
	return data;
});

export const createJob = createAsyncThunk('fetch/createJob', async (data) => {
	const response = await addJob(data);
	return response;
});

export const changeJob = createAsyncThunk('fetch/changeJob', async ({ id, data }) => {
	const response = await editJob(id, data);
	return response;
});

export const removeJob = createAsyncThunk('fetch/deleteJob', async (id) => {
	const response = await deleteJob(id);
	return response;
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
		searchByText: (state, action) => {
			state.searchText = action.payload;
		},
		searchBySort: (state, action) => {
			state.sort = action.payload;
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
				state.jobs = state.jobs.filter((item) => item.id !== action.meta.arg);
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
export const { addEditData, removeEditData, searchBySort, searchByText } = jobSlice.actions;
export default jobSlice.reducer;
