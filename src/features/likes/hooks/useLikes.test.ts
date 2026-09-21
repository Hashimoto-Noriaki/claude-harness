import { act, renderHook } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { useLikes } from "./useLikes";

describe("useLikes", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("初期状態ではいいねしていない", () => {
    const { result } = renderHook(() => useLikes());

    expect(result.current.isLiked("profile-1")).toBe(false);
  });

  it("toggle するといいね状態になる", () => {
    const { result } = renderHook(() => useLikes());

    act(() => {
      result.current.toggle("profile-1");
    });

    expect(result.current.isLiked("profile-1")).toBe(true);
    expect(result.current.likedIds).toEqual(["profile-1"]);
  });

  it("いいね済みの状態で toggle すると取り消される", () => {
    const { result } = renderHook(() => useLikes());

    act(() => {
      result.current.toggle("profile-1");
    });
    act(() => {
      result.current.toggle("profile-1");
    });

    expect(result.current.isLiked("profile-1")).toBe(false);
    expect(result.current.likedIds).toEqual([]);
  });

  it("いいね状態は localStorage に永続化される", () => {
    const { result, unmount } = renderHook(() => useLikes());

    act(() => {
      result.current.toggle("profile-1");
    });
    unmount();

    const { result: reloaded } = renderHook(() => useLikes());

    expect(reloaded.current.isLiked("profile-1")).toBe(true);
  });
});
