import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { FullMovie } from "../../entities/movie.entity";
import { MovieDBMovie } from "../../../infrastructure/interfaces/get-movie.response";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";


export const getMovieByIdUseCase = async( fetcher: HttpAdapter, movieId: number ): Promise<FullMovie> => {
    
    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`)

    const fullMovie = MovieMapper.fromMovieDBToEntity(movie)

    return fullMovie;

    
}