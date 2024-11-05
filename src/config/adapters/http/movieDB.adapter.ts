import { Axiosadapter } from "./axios.adapter";


export const movieDBfetcher = new Axiosadapter({
    baseUrl: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '58b54137fb41855d965934f849aef23c'
    }
})