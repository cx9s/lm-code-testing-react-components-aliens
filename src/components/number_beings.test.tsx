import { render, screen } from "@testing-library/react";
import NumberBeings, { NumberBeingsProps } from "./number_beings";
import user from "@testing-library/user-event";

const props: NumberBeingsProps = {
  numberBeings: 100,
  onChangeNumberBeings: jest.fn(),
};

test("Given the required props, When the component is rendered, Then the label and input should be present", () => {
  render(<NumberBeings {...props} />);
  expect(screen.getByText(/Number of beings:/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(props.numberBeings)).toBeInTheDocument();
});

test("Given the required props, When the value of input is invalid, Then the error message should be present", async () => {
  render(<NumberBeings {...props} />);
  const input = screen.getByDisplayValue(props.numberBeings);
  await user.type(input, "human");
  const errorMessage = screen.getByText(/Numbers ONLY./i);
  expect(errorMessage).toBeInTheDocument();
});
