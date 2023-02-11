import { render, screen } from "@testing-library/react";
import SpeciesName, { SpeciesNameProps } from "./species_name";
import user from "@testing-library/user-event";

const props: SpeciesNameProps = {
  speciesName: "speciesName",
  onChangeSpeciesName: jest.fn(),
};

test("Given the required props, When the component is rendered, Then the label and input should be present", () => {
  render(<SpeciesName {...props} />);
  const speciesNameLabel = screen.getByText(/Species Name:/i);
  expect(speciesNameLabel).toBeInTheDocument();

  const speciesNameInput = screen.getByDisplayValue(props.speciesName);
  expect(speciesNameInput).toBeInTheDocument();
  expect(speciesNameInput).toHaveAttribute("id", "speciesName");
});

test("Given the required props, When the value of input changed, Then the function should be present", async () => {
  render(<SpeciesName {...props} />);
  const input = screen.getByDisplayValue(props.speciesName);
  await user.type(input, "human");
  expect(props.onChangeSpeciesName).toHaveBeenCalledTimes(5);
});

test("Given the required props, When the value of input is invalid, Then the error message should be present", async () => {
  render(<SpeciesName {...props} />);
  const input = screen.getByDisplayValue(props.speciesName);
  await user.type(input, "human33");
  const errorMessage = screen.getByText(
    /Must be between 3 and 23 characters./i
  );
  expect(errorMessage).toBeInTheDocument();
});

test("Given the required props, When the value of input is valid, Then the error message should not be present", async () => {
  render(<SpeciesName {...props} />);
  const input = screen.getByDisplayValue(props.speciesName);
  await user.type(input, "human");
  expect(
    screen.queryByText(/Must be between 3 and 23 characters./i)
  ).not.toBeInTheDocument();
});
