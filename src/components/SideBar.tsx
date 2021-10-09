import { useState } from "react";
import { Button } from "./Button"
interface SidebarProps {
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>,
  setSelectedGenreId: any,
  selectedGenreId: number;
};

export const SideBar = (props:SidebarProps) => {
  const [selectedGenreId, setSelectedGenreId] = useState(props.selectedGenreId);

  function handleClickButton(id: number) {
    props.setSelectedGenreId(id);
  }
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            {...props}
            key={String(genre.id)}
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
