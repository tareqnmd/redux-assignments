const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const axios = require('axios');

const initialState = {
	videos: { error: '', loading: false, video: {} },
	relatedVideos: { error: '', loading: false, videos: [] },
};

const fetchVideos = createAsyncThunk('video/fetchVideos', async (_, thunkAPI) => {
	const { data } = await axios.get('http://localhost:9000/videos');
	thunkAPI.dispatch(fetchRelatedVideos(data.tags));
	return data;
});

const fetchRelatedVideos = createAsyncThunk('video/fetchRelatedVideos', async (tags) => {
	const tagString = tags.join('&tags_like=');
	const { data } = await axios.get(`http://localhost:9000/videos?tags_like${tagString}`);
	return data;
});

const videoSlice = createSlice({
	name: 'video',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(fetchVideos.pending, (state, action) => {
			state.videos.error = '';
			state.videos.loading = true;
			state.videos.video = {};
		});
		builder.addCase(fetchVideos.fulfilled, (state, action) => {
			state.videos.error = '';
			state.videos.loading = false;
			state.videos.video = action.payload;
		});
		builder.addCase(fetchVideos.rejected, (state, action) => {
			state.videos.error = state.error.message;
			state.videos.loading = false;
			state.videos.video = {};
		});
		builder.addCase(fetchRelatedVideos.pending, (state, action) => {
			state.relatedVideos.error = '';
			state.relatedVideos.loading = true;
			state.relatedVideos.videos = [];
		});
		builder.addCase(fetchRelatedVideos.fulfilled, (state, action) => {
			state.relatedVideos.error = '';
			state.relatedVideos.loading = false;
			state.relatedVideos.videos = action.payload;
		});
		builder.addCase(fetchRelatedVideos.rejected, (state, action) => {
			state.relatedVideos.error = state.error.message;
			state.relatedVideos.loading = false;
			state.relatedVideos.videos = [];
		});
	},
});

module.exports = videoSlice.reducer;
module.exports.fetchVideos = fetchVideos;
