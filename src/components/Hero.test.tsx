import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Hero from "./Hero";

describe("Hero", () => {
  it("renders the system initialization copy and safe social links", () => {
    render(<Hero />);

    expect(screen.getByText("System Initialization")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 1, name: /AI-Forward Systems Engineer/i })).toBeInTheDocument();
    expect(screen.getByText(/resource-constrained environments/i)).toBeInTheDocument();

    const githubLink = screen.getByRole("link", { name: "View GitHub" });
    const linkedInLink = screen.getByRole("link", { name: "Connect on LinkedIn" });

    expect(githubLink).toHaveAttribute("href", "https://github.com");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
    expect(linkedInLink).toHaveAttribute("href", "https://linkedin.com");
    expect(linkedInLink).toHaveAttribute("target", "_blank");
    expect(linkedInLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});