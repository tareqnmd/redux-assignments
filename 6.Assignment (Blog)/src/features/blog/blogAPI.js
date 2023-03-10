import axiosInstance from '../../utils/axios';

const getBlog = async (id) => {
	const response = await axiosInstance.get(`/blogs/${id}`);
	return response.data;
};
export default getBlog;

export const toggleBookmark = async (id, isSaved) => {
	const response = await axiosInstance.patch(`/blogs/${id}`, { isSaved });
	return response.data;
};

export const likeBlog = async (id, likes) => {
	const response = await axiosInstance.patch(`/blogs/${id}`, { likes });
	return response.data;
};
