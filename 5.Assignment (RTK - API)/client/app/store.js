const { configureStore } = require('@reduxjs/toolkit');
const { createLogger } = require('redux-logger');
const videoReducer = require('../features/videos/videoSlice');
const logger = createLogger();

const store = configureStore({
	reducer: {
		video: videoReducer,
	},
	middleware: (defaultMiddleware) => defaultMiddleware().concat(logger),
});

module.exports = store;
