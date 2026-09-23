"use client";

import { useCallback, useEffect, useState } from "react";

const LIKES_KEY = "liked_profiles";

function readLikes(): string[] {
  const raw = localStorage.getItem(LIKES_KEY);
  return raw ? (JSON.parse(raw) as string[]) : [];
}

function writeLikes(profileIds: string[]): void {
  localStorage.setItem(LIKES_KEY, JSON.stringify(profileIds));
}

export function useLikes() {
  const [likedIds, setLikedIds] = useState<string[]>([]);

  useEffect(() => {
    setLikedIds(readLikes());
  }, []);

  const isLiked = useCallback(
    (profileId: string) => likedIds.includes(profileId),
    [likedIds],
  );

  const toggle = useCallback((profileId: string) => {
    const current = readLikes();
    const next = current.includes(profileId)
      ? current.filter((id) => id !== profileId)
      : [...current, profileId];

    writeLikes(next);
    setLikedIds(next);
  }, []);

  return { likedIds, isLiked, toggle };
}
