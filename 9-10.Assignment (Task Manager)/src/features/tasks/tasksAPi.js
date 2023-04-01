import { apiSlice } from '../api/apiSlice';

export const tasksApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTasks: builder.query({
			query: () => ({
				url: '/tasks',
			}),
		}),
		getTask: builder.query({
			query: (id) => ({
				url: `/tasks/${id}`,
			}),
		}),
		addTask: builder.mutation({
			query: (data) => ({
				url: '/tasks',
				method: 'POST',
				body: data,
			}),
		}),
		deleteTask: builder.mutation({
			query: (id) => ({
				url: `/tasks/${id}`,
				method: 'DELETE',
			}),
		}),
		editTask: builder.mutation({
			query: ({ id, data }) => ({
				url: `/tasks/${id}`,
				method: 'PATCH',
				body: data,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				//optimistic
				const taskUpdate = dispatch(
					apiSlice.util.updateQueryData('getTask', arg?.id, (draft) => {
						Object.assign(draft, arg?.data);
					})
				);
				const tasksUpdate = dispatch(
					apiSlice.util.updateQueryData('getTasks', undefined, (draft) => {
						const editTask = draft?.find((task) => String(task.id) === String(arg.id));
						Object.assign(editTask, arg?.data);
					})
				);
				try {
					await queryFulfilled;
				} catch (error) {
					taskUpdate.undo();
					tasksUpdate.undo();
				}
			},
		}),
	}),
});

export const {
	useGetTasksQuery,
	useAddTaskMutation,
	useDeleteTaskMutation,
	useEditTaskMutation,
	useGetTaskQuery,
} = tasksApi;
