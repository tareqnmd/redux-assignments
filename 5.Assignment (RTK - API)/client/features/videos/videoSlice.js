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
	extraReducer: (builder) => {
		builder.addCase(fetchVideos.pending, (state, action) => {
			state.error = '';
			state.loading = true;
			state.video = {};
		});
		builder.addCase(fetchVideos.fulfilled, (state, action) => {
			state.error = '';
			state.loading = false;
			state.video = action.payload;
		});
		builder.addCase(fetchVideos.rejected, (state, action) => {
			state.error = state.error;
			state.loading = false;
			state.video = {};
		});
	},
});

module.exports = videoSlice.reducer;
module.exports.fetchVideos = fetchVideos;
