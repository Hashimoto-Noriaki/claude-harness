import { LikeButton } from "@/features/likes/components/LikeButton";
import { ProfileCard } from "@/features/profiles/components/ProfileCard";
import { dummyProfiles } from "@/features/profiles/data/profiles";

export default function ProfilesPage() {
  return (
    <main className="mx-auto w-full max-w-4xl p-6">
      <h1 className="mb-6 text-2xl font-bold">プロフィール一覧</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {dummyProfiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            actions={<LikeButton profileId={profile.id} />}
          />
        ))}
      </div>
    </main>
  );
}
