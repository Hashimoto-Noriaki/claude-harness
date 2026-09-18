"use client";

import { useState } from "react";
import { ProfileCard } from "@/features/profiles/components/ProfileCard";
import type { Profile } from "@/features/profiles/types";

type ProfileAgeFilterProps = {
  profiles: Profile[];
};

export function ProfileAgeFilter({ profiles }: ProfileAgeFilterProps) {
  const [minAge, setMinAge] = useState(20);
  const [maxAge, setMaxAge] = useState(30);

  const filteredProfiles = profiles.filter(
    (profile) => profile.age > minAge && profile.age < maxAge,
  );

  return (
    <div>
      <div className="mt-4 flex items-center gap-4">
        <label className="flex items-center gap-2 text-sm">
          最小年齢
          <input
            type="number"
            value={minAge}
            onChange={(e) => setMinAge(Number(e.target.value))}
            className="w-16 rounded border border-gray-300 px-2 py-1"
          />
        </label>
        <label className="flex items-center gap-2 text-sm">
          最大年齢
          <input
            type="number"
            value={maxAge}
            onChange={(e) => setMaxAge(Number(e.target.value))}
            className="w-16 rounded border border-gray-300 px-2 py-1"
          />
        </label>
      </div>
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filteredProfiles.map((profile) => (
          <li key={profile.id}>
            <ProfileCard profile={profile} />
          </li>
        ))}
      </ul>
    </div>
  );
}
