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
      onClick={() => toggle(profileId)}
      aria-pressed={liked}
      aria-label={liked ? "いいねを取り消す" : "いいねする"}
      className={`rounded-full border px-3 py-1 text-sm ${
        liked
          ? "border-pink-500 bg-pink-500 text-white"
          : "border-gray-300 bg-white text-gray-500"
      }`}
    >
      {liked ? "♥ いいね済み" : "♡ いいね"}
    </button>
  );
}
