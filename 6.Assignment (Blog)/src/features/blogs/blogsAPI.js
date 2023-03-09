import axiosInstance from '../../utils/axios';

const getBlogs = async (sortType, filterType) => {
	const query = `?${filterType === 'saved' ? 'isSaved=true' : ''}`;
	const response = await axiosInstance.get(`/blogs/${query}`);
	return response.data;
};
export default getBlogs;
