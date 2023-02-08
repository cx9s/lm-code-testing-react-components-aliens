import { render, screen } from "@testing-library/react";
import Reason, { ReasonProps } from "./reason";

const props: ReasonProps = {
  reason: "some reasons",
  onChangeReason: jest.fn(),
};

test("Given the required props, When the component is rendered, Then the label and input should be present", () => {
  render(<Reason {...props} />);
  expect(screen.getByText(/Reason for sparing:/i)).toBeInTheDocument();
  expect(screen.getByDisplayValue(props.reason)).toBeInTheDocument();
});
