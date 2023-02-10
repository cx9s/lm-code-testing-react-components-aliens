import { render, screen } from "@testing-library/react";
import ErrorMessage, { ErrorMessageProps } from "./error_message";

const props: ErrorMessageProps = {
  errorMessage: "error message",
};

test("Given the required props, When the component is rendered, Then the error message should be present", () => {
  render(<ErrorMessage {...props} />);
  expect(screen.getByText("error message")).toBeInTheDocument();
});
