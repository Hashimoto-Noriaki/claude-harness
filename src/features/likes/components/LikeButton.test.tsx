import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { LikeButton } from "./LikeButton";

describe("LikeButton", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("初期状態は未いいね表示", () => {
    render(<LikeButton profileId="profile-1" />);

    expect(
      screen.getByRole("button", { name: "いいねする" }),
    ).toBeInTheDocument();
  });

  it("クリックするといいね済み表示に切り替わる", async () => {
    const user = userEvent.setup();
    render(<LikeButton profileId="profile-1" />);

    await user.click(screen.getByRole("button", { name: "いいねする" }));

    expect(
      screen.getByRole("button", { name: "いいねを取り消す" }),
    ).toBeInTheDocument();
  });

  it("再度クリックするといいねが取り消される", async () => {
    const user = userEvent.setup();
    render(<LikeButton profileId="profile-1" />);

    const button = screen.getByRole("button", { name: "いいねする" });
    await user.click(button);
    await user.click(screen.getByRole("button", { name: "いいねを取り消す" }));

    expect(
      screen.getByRole("button", { name: "いいねする" }),
    ).toBeInTheDocument();
  });
});
