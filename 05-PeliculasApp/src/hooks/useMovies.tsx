import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import { MovieDBMoviesResponse, Movie } from '../interfaces/movieInterface';

interface MoviesState {
    popular: Movie[];
    nowPlaying: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}


export const useMovies = () => {
    const [moviesState, setMoviesState] = useState<MoviesState>({
        popular: [],
        nowPlaying: [],
        topRated: [],
        upcoming: [],

    });
    const [isLoading, setIsLoading] = useState(true);

    const getMovies = async () => {
        const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing');
        const popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular');
        const topRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated');
        const upcomingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming');

        const response = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise,
        ]);

        setMoviesState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results,
            topRated: response[2].data.results,
            upcoming: response[3].data.results,
        });

        setIsLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);
    return {
        ...moviesState,
        isLoading,
    };
};
