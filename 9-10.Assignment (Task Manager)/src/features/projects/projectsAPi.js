import { apiSlice } from '../api/apiSlice';
import { checkedProjects } from './projectsSlice';

export const projectsApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getProjects: builder.query({
			query: () => ({
				url: '/projects',
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const { data } = await queryFulfilled;
					if (data.length > 0) {
						dispatch(checkedProjects(data?.map((item) => item.id)));
					}
				} catch (error) {}
			},
		}),
		getProject: builder.query({
			query: (id) => ({
				url: `/projects/${id}`,
			}),
		}),
	}),
});

export const { useGetProjectsQuery, useGetProjectQuery } = projectsApi;
