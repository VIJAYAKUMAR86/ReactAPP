 
import { render, screen } from "@testing-library/react";
import Course from "./Course";

test("renders color text", () => {
  render(<Course color="red" />);
  const textElement = screen.getByText("red");
  expect(textElement).toBeInTheDocument();
});

 