import type { Profile } from "@/features/profiles/types";

export const dummyProfiles: Profile[] = [
  {
    id: "1",
    name: "山田 花子",
    age: 25,
    location: "東京都",
    bio: "休日はカフェでのんびり読書しています。",
    imageUrl: "https://picsum.photos/seed/profile-1/400/300",
    hobbies: ["読書", "カフェ巡り", "旅行"],
  },
  {
    id: "2",
    name: "佐藤 美咲",
    age: 28,
    location: "神奈川県",
    bio: "料理が好きで、最近はパン作りにハマっています。",
    imageUrl: "https://picsum.photos/seed/profile-2/400/300",
    hobbies: ["料理", "パン作り", "ヨガ"],
  },
  {
    id: "3",
    name: "鈴木 彩",
    age: 24,
    location: "大阪府",
    bio: "音楽フェスに行くのが毎年の楽しみです。",
    imageUrl: "https://picsum.photos/seed/profile-3/400/300",
    hobbies: ["音楽", "フェス", "写真"],
  },
  {
    id: "4",
    name: "高橋 優衣",
    age: 30,
    location: "福岡県",
    bio: "週末は山登りやキャンプに出かけています。",
    imageUrl: "https://picsum.photos/seed/profile-4/400/300",
    hobbies: ["登山", "キャンプ", "映画"],
  },
];
