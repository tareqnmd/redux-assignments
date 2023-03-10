import axiosInstance from '../../utils/axios';

const getBlog = async (id) => {
	const response = await axiosInstance.get(`/blogs/${id}`);
	return response.data;
};
export default getBlog;
