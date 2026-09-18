import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-gradient-to-b from-pink-50 to-white px-4 py-16 text-center">
      <span className="text-5xl">💖</span>
      <h1 className="mt-4 text-4xl font-bold text-gray-900">Matchy</h1>
      <p className="mt-3 max-w-md text-gray-600">
        運命の出会いを、もっと身近に。
        <br />
        気になる人を見つけて、マッチングを始めよう。
      </p>
      <Link
        href="/profiles"
        className="mt-8 rounded-full bg-pink-500 px-8 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-pink-600"
      >
        プロフィールを見る
      </Link>
    </div>
  );
}
