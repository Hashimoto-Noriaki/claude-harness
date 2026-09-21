"use client";

import { useCallback, useEffect, useState } from "react";

const LIKES_KEY = "likes";

function readLikedIds(): string[] {
  const raw = localStorage.getItem(LIKES_KEY);
  return raw ? (JSON.parse(raw) as string[]) : [];
}

function writeLikedIds(likedIds: string[]): void {
  localStorage.setItem(LIKES_KEY, JSON.stringify(likedIds));
}

export function useLikes() {
  const [likedIds, setLikedIds] = useState<string[]>([]);

  useEffect(() => {
    setLikedIds(readLikedIds());
  }, []);

  const isLiked = useCallback(
    (profileId: string) => likedIds.includes(profileId),
    [likedIds],
  );

  const toggle = useCallback((profileId: string) => {
    setLikedIds((current) => {
      const next = current.includes(profileId)
        ? current.filter((id) => id !== profileId)
        : [...current, profileId];
      writeLikedIds(next);
      return next;
    });
  }, []);

  return { likedIds, isLiked, toggle };
}
