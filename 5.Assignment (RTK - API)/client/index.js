const store = require('./app/store');
const { fetchVideos } = require('./features/videos/videoSlice');

store.subscribe(() => {});
store.dispatch(fetchVideos());
