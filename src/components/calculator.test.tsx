import { render, screen } from "@testing-library/react";
import Calculator, { CalculatorProps } from "./calculator";

const props: CalculatorProps = {
  calculator: true,
  onChangeCalculator: jest.fn(),
};

test("Given the required props, When the component is rendered, Then the label and input should be present", () => {
  render(<Calculator {...props} />);
  expect(screen.getByText(/What is 2/i)).toBeInTheDocument();
  expect(screen.getByText(/Not 4/i)).toBeInTheDocument();
});
