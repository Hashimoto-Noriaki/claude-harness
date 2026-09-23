import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";
import { LikeButton } from "./LikeButton";

describe("LikeButton", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("初期状態ではいいねされていない", () => {
    render(<LikeButton profileId="1" />);

    const button = screen.getByRole("button", { name: "いいねする" });
    expect(button).toHaveAttribute("aria-pressed", "false");
  });

  it("クリックするといいね状態が切り替わる", async () => {
    const user = userEvent.setup();
    render(<LikeButton profileId="1" />);

    await user.click(screen.getByRole("button", { name: "いいねする" }));

    const liked = screen.getByRole("button", { name: "いいねを取り消す" });
    expect(liked).toHaveAttribute("aria-pressed", "true");

    await user.click(liked);

    expect(screen.getByRole("button", { name: "いいねする" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });
});
