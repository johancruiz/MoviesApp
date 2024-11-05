import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import type { Movie } from "../../entities/movie.entity";




export const moviesNowPlayingUseCase = async( fetcher: HttpAdapter ):Promise<Movie[]> => {
    try {
        const NowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing')
        console.log({NowPlaying})
        return [];
    } catch (error) {
        console.log(error)
        throw new Error('Error Fetching movies - NowPlaying')
    }
}