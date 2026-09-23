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

    const button = screen.getByRole("button", { name: "いいね" });
    expect(button).toHaveAttribute("aria-pressed", "false");
  });

  it("クリックするといいね状態になり、再クリックで取り消される", async () => {
    const user = userEvent.setup();
    render(<LikeButton profileId="1" />);

    await user.click(screen.getByRole("button", { name: "いいね" }));
    const likedButton = screen.getByRole("button", {
      name: "いいねを取り消す",
    });
    expect(likedButton).toHaveAttribute("aria-pressed", "true");

    await user.click(likedButton);
    expect(screen.getByRole("button", { name: "いいね" })).toHaveAttribute(
      "aria-pressed",
      "false",
    );
  });
});
