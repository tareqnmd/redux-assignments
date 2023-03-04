const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const axios = require('axios');

const initialState = {
	videos: { error: '', loading: false, video: {} },
	relatedVideos: { error: '', loading: false, videos: [] },
};

const fetchVideos = createAsyncThunk('video/fetchVideos', async () => {
	const response = await axios.get('http://localhost:9000/videos');
	return response.data;
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
			state.videos.error = state.error;
			state.videos.loading = false;
			state.videos.video = {};
		});
	},
});

module.exports = videoSlice.reducer;
module.exports.fetchVideos = fetchVideos;
