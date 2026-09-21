import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { RegisterForm } from "./RegisterForm";

const push = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push }),
}));

describe("RegisterForm", () => {
  beforeEach(() => {
    localStorage.clear();
    push.mockClear();
  });

  it("ニックネーム・メールアドレス・パスワードの入力欄、登録ボタンが表示される", () => {
    render(<RegisterForm />);

    expect(screen.getByLabelText("ニックネーム")).toBeInTheDocument();
    expect(screen.getByLabelText("メールアドレス")).toBeInTheDocument();
    expect(screen.getByLabelText("パスワード")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "登録する" }),
    ).toBeInTheDocument();
  });

  it("入力内容で登録すると遷移する", async () => {
    const user = userEvent.setup();
    render(<RegisterForm />);

    await user.type(screen.getByLabelText("ニックネーム"), "テストユーザー");
    await user.type(screen.getByLabelText("メールアドレス"), "new@example.com");
    await user.type(screen.getByLabelText("パスワード"), "password123");
    await user.click(screen.getByRole("button", { name: "登録する" }));

    expect(await screen.findByText("登録する")).toBeInTheDocument();
    expect(push).toHaveBeenCalledWith("/");
  });

  it("登録済みのメールアドレスで登録するとエラーが表示される", async () => {
    const user = userEvent.setup();
    const { unmount } = render(<RegisterForm />);

    await user.type(screen.getByLabelText("ニックネーム"), "ユーザー1");
    await user.type(
      screen.getByLabelText("メールアドレス"),
      "duplicate@example.com",
    );
    await user.type(screen.getByLabelText("パスワード"), "password123");
    await user.click(screen.getByRole("button", { name: "登録する" }));
    await screen.findByText("登録する");
    unmount();

    render(<RegisterForm />);
    await user.type(screen.getByLabelText("ニックネーム"), "ユーザー2");
    await user.type(
      screen.getByLabelText("メールアドレス"),
      "duplicate@example.com",
    );
    await user.type(screen.getByLabelText("パスワード"), "password456");
    await user.click(screen.getByRole("button", { name: "登録する" }));

    expect(
      await screen.findByText("このメールアドレスは既に登録されています"),
    ).toBeInTheDocument();
  });
});
