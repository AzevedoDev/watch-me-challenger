import {Button} from "./Button";

export interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}

type SideBarType = {
    handleClickButton: (id: number) => void
    selectedGenreId: number
    genres: Array<GenreResponseProps>
}

export function SideBar({handleClickButton, selectedGenreId, genres}: SideBarType) {
    return (
        <nav className="sidebar">
            <span>Watch<p>Me</p></span>

            <div className="buttons-container">
                {genres.map(genre => (
                    <Button
                        id={String(genre.id)}
                        title={genre.title}
                        iconName={genre.name}
                        onClick={() => handleClickButton(genre.id)}
                        selected={selectedGenreId === genre.id}
                    />
                ))}
            </div>

        </nav>
    )
}