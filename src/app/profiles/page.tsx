import { ProfileCard } from "@/features/profiles/components/ProfileCard";
import { dummyProfiles } from "@/features/profiles/data/dummyProfiles";

export default function ProfilesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-bold">プロフィール一覧</h1>
      <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {dummyProfiles.map((profile) => (
          <li key={profile.id}>
            <ProfileCard profile={profile} />
          </li>
        ))}
      </ul>
    </div>
  );
}
