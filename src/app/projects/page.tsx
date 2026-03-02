"use client"
import { useGames } from "../_hooks/itch/useGames";

export default function Projects() {
    const { data, isLoading, isError } = useGames();
    console.log(data);
    console.log("Error:", isError);
    return (
        <div>
            {isLoading && <p>Loading games...</p>}
            {isError && <p>Error loading games</p>}
            {data && (
                <ul>
                    {data.games.map((game: any) => (
                        <li key={game.id}>{game.title}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}