import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import TerminalWrapper from "./TerminalWrapper";

describe("TerminalWrapper", () => {
  it("labels the terminal frame and renders children", () => {
    render(
      <TerminalWrapper title="Semantic SOC Analyst">
        <p>Project evidence</p>
      </TerminalWrapper>,
    );

    expect(screen.getByRole("region", { name: "Semantic SOC Analyst" })).toBeInTheDocument();
    expect(screen.getByText("Semantic SOC Analyst")).toBeInTheDocument();
    expect(screen.getByText("Project evidence")).toBeInTheDocument();
  });
});