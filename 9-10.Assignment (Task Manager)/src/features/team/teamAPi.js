import { apiSlice } from '../api/apiSlice';

export const teamApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTeams: builder.query({
			query: () => ({
				url: '/team',
			}),
		}),
		getTeam: builder.query({
			query: (id) => ({
				url: `/team/${id}`,
			}),
		}),
	}),
});

export const { useGetTeamsQuery, useGetTeamQuery } = teamApi;
