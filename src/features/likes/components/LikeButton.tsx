"use client";

import { useLikes } from "@/features/likes/hooks/useLikes";

type LikeButtonProps = {
  profileId: string;
};

export function LikeButton({ profileId }: LikeButtonProps) {
  const { isLiked, toggle } = useLikes();
  const liked = isLiked(profileId);

  return (
    <button
      type="button"
      aria-pressed={liked}
      aria-label={liked ? "いいねを取り消す" : "いいね"}
      onClick={() => toggle(profileId)}
      className={`rounded-full px-3 py-1 text-xl transition-colors ${
        liked ? "text-pink-500" : "text-gray-400 hover:text-pink-400"
      }`}
    >
      {liked ? "♥" : "♡"}
    </button>
  );
}
