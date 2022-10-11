import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
    
export const shazamCoreApi = createApi({
    reducerPath: 'shazamcoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key','b5051634bamsh11456430af5e0efp1d12a8jsn07f7d797c327');

            return headers;
        },
    }), 
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => '/charts/world'}),
        getSongDetails:builder.query({query: ({songid}) => `/tracks/details?track_id=${songid}`})
    }),
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
} = shazamCoreApi;