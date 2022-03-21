import { render, screen } from "@testing-library/react";
import FoodIntakePage from "./FoodIntakePage";

test("to have heading", () => {
  render(<FoodIntakePage />);
  const pageHeader = screen.getByText("Track your food intake");
  expect(pageHeader).toBeInTheDocument();
});
