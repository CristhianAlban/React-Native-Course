import { useState, useEffect } from 'react';
import { MovieFull } from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';
import { CreditsResponse } from '../interfaces/creditsInterface';

interface MovieDetails {
    isLoading: boolean
    movieFull?: MovieFull
    cast: any[]
}

export const useMovieDetails = (movieId:number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast:[],
    });

    const getMovieDetails = async () => {

        const movieDetailsPromise = await movieDB.get<MovieFull>(`/${ movieId}`);
        const castPromise = await movieDB.get<CreditsResponse>(`/${ movieId}/credits`);
        const [movieDetailsResp, castResp ] = await Promise.all([movieDetailsPromise, castPromise]);

        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: castResp.data.cast,
        });
    };

    useEffect(()=>{
        getMovieDetails();
    }, []);

    return {
        ...state,
    };

};
