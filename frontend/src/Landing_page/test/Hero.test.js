import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../home/HeroSection";

describe("Hero component", () => {
  test("renders the Hero component with correct content", () => {
    render(<Hero />);

    const heroImage = screen.getByAltText("hero");

    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute(
      "src",
      "media/images/homeHero.png"
    );
  });
});