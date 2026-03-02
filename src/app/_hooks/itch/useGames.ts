"use client"
import { ItchGamesResponse } from "@/app/_types/itch-game";
import { useQuery } from "@tanstack/react-query";

async function fetchGames() {
  const res = await fetch("/api/itch/game");

  if (!res.ok) throw new Error("Failed to fetch games");

  return res.json();
}

export function useGames() {
  return useQuery<ItchGamesResponse>({
    queryKey: ["project:games"],
    queryFn: fetchGames,
  });
}