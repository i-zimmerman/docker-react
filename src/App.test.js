import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("Hey you");
  expect(linkElement).toBeInTheDocument();
});

test("learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText("Hey you");
  expect(linkElement).toBeInTheDocument();
});
