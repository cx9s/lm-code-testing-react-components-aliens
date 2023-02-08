import { render, screen } from "@testing-library/react";
import NumberBeings, { NumberBeingsProps } from "./number_beings";

const props: NumberBeingsProps = {
  numberBeings: 100,
  onChangeNumberBeings: jest.fn(),
};

test("Given the required props, When the component is rendered, Then the label and input should be present", () => {
  render(<NumberBeings {...props} />);
  expect(screen.getByText(/Number of beings:/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(props.numberBeings)).toBeInTheDocument();
});
