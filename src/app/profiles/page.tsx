import { ProfileAgeFilter } from "@/features/profiles/components/ProfileAgeFilter";
import { dummyProfiles } from "@/features/profiles/data/dummyProfiles";

export default function ProfilesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <h1 className="text-2xl font-bold">プロフィール一覧</h1>
      <ProfileAgeFilter profiles={dummyProfiles} />
    </div>
  );
}
