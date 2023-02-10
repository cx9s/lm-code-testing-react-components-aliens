import { render, screen } from "@testing-library/react";
import Reason, { ReasonProps } from "./reason";
import user from "@testing-library/user-event";

const props: ReasonProps = {
  reason: "some reasons",
  onChangeReason: jest.fn(),
};

test("Given the required props, When the component is rendered, Then the label and input should be present", () => {
  render(<Reason {...props} />);
  expect(screen.getByText(/Reason for sparing:/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(props.reason)).toBeInTheDocument();
});

test("Given the required props, When the value of input is invalid, Then the error message should be present", async () => {
  render(<Reason {...props} />);
  const input = screen.getByDisplayValue(props.reason);
  await user.type(input, "human");
  const errorMessage = screen.getByText(
    /Must be between 17 and 153 characters./i
  );
  expect(errorMessage).toBeInTheDocument();
});
