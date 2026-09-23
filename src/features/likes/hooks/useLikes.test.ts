import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { useLikes } from "./useLikes";

describe("useLikes", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("初期状態ではいいねが空", () => {
    const { result } = renderHook(() => useLikes());

    expect(result.current.likedIds).toEqual([]);
    expect(result.current.isLiked("1")).toBe(false);
  });

  it("toggle でいいねをつけられる", () => {
    const { result } = renderHook(() => useLikes());

    act(() => {
      result.current.toggle("1");
    });

    expect(result.current.isLiked("1")).toBe(true);
  });

  it("もう一度 toggle するといいねが取り消される", () => {
    const { result } = renderHook(() => useLikes());

    act(() => {
      result.current.toggle("1");
    });
    act(() => {
      result.current.toggle("1");
    });

    expect(result.current.isLiked("1")).toBe(false);
  });

  it("いいねが localStorage に保存され、再マウント後も復元される", () => {
    const { result, unmount } = renderHook(() => useLikes());

    act(() => {
      result.current.toggle("1");
      result.current.toggle("m2");
    });
    unmount();

    expect(JSON.parse(localStorage.getItem("liked_profiles") ?? "[]")).toEqual([
      "1",
      "m2",
    ]);

    const { result: remounted } = renderHook(() => useLikes());
    expect(remounted.current.likedIds).toEqual(["1", "m2"]);
  });
});
