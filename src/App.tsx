import {useEffect, useState} from 'react';

import {GenreResponseProps, SideBar} from './components/SideBar';

import {api} from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import {Content, MovieProps} from "./components/Content";


export function App() {
    const [selectedGenreId, setSelectedGenreId] = useState(1);

    const [genres, setGenres] = useState<GenreResponseProps[]>([]);

    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

    useEffect(() => {
        api.get<GenreResponseProps[]>('genres').then(response => {
            setGenres(response.data);
        });
    }, []);

    useEffect(() => {
        api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
            setMovies(response.data);
        });

        api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
            setSelectedGenre(response.data);
        })
    }, [selectedGenreId]);

    function handleClickButton(id: number) {
        setSelectedGenreId(id);
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <SideBar handleClickButton={handleClickButton} genres={genres} selectedGenreId={selectedGenreId}/>
            <Content movies={movies} selectedGenre={selectedGenre}/>
        </div>
    )
}