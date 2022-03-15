import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders weather app h1", () => {
  render(<App />);
  const linkElement = screen.getByText(/weather app/i);
  expect(linkElement).toBeInTheDocument();
});
