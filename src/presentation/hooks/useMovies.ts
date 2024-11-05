import { useEffect, useState } from "react"
import { moviesNowPlayingUseCase } from '../../core/use-cases/movies/now-playing.use-case';
import { movieDBfetcher } from '../../config/adapters/http/movieDB.adapter';
import { Movie } from "../../core/entities/movie.entity";

const useMovies = () => {

  const [nowPlaying, setNowPlaying] = useState<Movie[]>([])  
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    initialLoad()
  }, [])

  const initialLoad = async() => {
    const nowPlayingMovies = await moviesNowPlayingUseCase(movieDBfetcher)
  }

  return {
    isLoading,
    nowPlaying,
  }
}

export default useMovies
