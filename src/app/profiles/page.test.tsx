import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { dummyProfiles } from "@/features/profiles/data/dummyProfiles";
import ProfilesPage from "./page";

describe("ProfilesPage", () => {
  it("見出しが表示される", () => {
    render(<ProfilesPage />);

    expect(screen.getByText("プロフィール一覧")).toBeInTheDocument();
  });

  it("ダミープロフィールがすべて表示される", () => {
    render(<ProfilesPage />);

    for (const profile of dummyProfiles) {
      expect(
        screen.getByText(`${profile.name}（${profile.age}）`),
      ).toBeInTheDocument();
    }
  });
});
