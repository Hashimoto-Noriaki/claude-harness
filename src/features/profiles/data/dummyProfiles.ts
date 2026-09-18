import type { Profile } from "@/features/profiles/types";

export const dummyProfiles: Profile[] = [
  {
    id: "1",
    name: "山田 花子",
    age: 25,
    location: "東京都",
    bio: "カフェ巡りと読書が好きです。よろしくお願いします。",
    imageUrl: "/images/profile-1.jpg",
    hobbies: ["読書", "旅行", "カフェ巡り"],
  },
  {
    id: "2",
    name: "佐藤 太郎",
    age: 29,
    location: "大阪府",
    bio: "週末はキャンプや登山に出かけています。",
    imageUrl: "/images/profile-2.jpg",
    hobbies: ["キャンプ", "登山", "写真"],
  },
  {
    id: "3",
    name: "鈴木 美咲",
    age: 27,
    location: "福岡県",
    bio: "映画鑑賞と料理が趣味です。",
    imageUrl: "/images/profile-3.jpg",
    hobbies: ["映画", "料理", "ヨガ"],
  },
];
