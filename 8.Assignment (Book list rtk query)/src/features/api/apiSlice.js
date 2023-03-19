import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:9000',
	}),
	tagTypes: ['books'],
	endpoints: (builder) => ({
		getBooks: builder.query({
			query: () => ({
				url: '/books',
			}),
			keepUnusedDataFor: 120,
			providedTags: ['books'],
		}),
		getBook: builder.query({
			query: (id) => ({
				url: `/books/${id}`,
			}),
			providedTags: (result, error, arg) => [
				{ type: 'book', id: arg.id },
			],
		}),
		addBook: builder.mutation({
			query: (data) => ({
				url: `/books`,
				method: 'POST',
				body: data,
			}),
			invalidatesTags: ['books'],
		}),
		editBook: builder.mutation({
			query: ({ id, data }) => ({
				url: `/books/${id}`,
				method: 'PATCH',
				body: data,
			}),
			invalidatesTags: (result, error, arg) => [
				'books',
				{ type: 'book', id: arg.id },
			],
		}),
		deleteBook: builder.mutation({
			query: (id) => ({
				url: `/videos/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: ['books'],
		}),
	}),
});

export const {
	useGetBooksQuery,
	useGetBookQuery,
	useAddBookMutation,
	useEditBookMutation,
	useDeleteBookMutation,
} = apiSlice;
