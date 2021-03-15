import {MovieCard} from "./MovieCard";
import {GenreResponseProps} from "./SideBar";

export interface MovieProps {
    Title: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: string;
    }>;
    Runtime: string;
}
type ContentType ={
    movies: Array<MovieProps>
    selectedGenre:GenreResponseProps
}

export function Content({movies,selectedGenre}:ContentType) {
    return (
        <div className="container">
            <header>
                <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
            </header>

            <main>
                <div className="movies-list">
                    {movies.map(movie => (
                        <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime}
                                   rating={movie.Ratings[0].Value}/>
                    ))}
                </div>
            </main>
        </div>
    )
}