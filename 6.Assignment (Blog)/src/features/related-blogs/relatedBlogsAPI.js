import axiosInstance from '../../utils/axios';

const getRelatedBlogs = async (tags, id) => {
	const query = tags?.length
		? tags.map((tag) => `tags_like=${tag}`).join('&') + `&id_ne=${id}&_limit=${3}`
		: `id_ne=${id}&_limit=${3}`;
	const response = await axiosInstance.get(`/blogs?${query}`);
	return response.data;
};

export default getRelatedBlogs;
